
/**
 * @jest-environment node
 */

import { GET, POST } from '../route';
import { connectToDatabase } from '@/lib/db';
import { NextRequest } from 'next/server';

// Mock the connectToDatabase function
jest.mock('@/lib/db', () => ({
  connectToDatabase: jest.fn(),
}));

describe('App Route Handlers', () => {
  // Reset mocks before each test to ensure isolation
  beforeEach(() => {
    jest.clearAllMocks();
  });

  /** Tests for GET Handler */
  describe('GET', () => {
    it('returns the profile when found', async () => {
      // Arrange: Set up mocks
      const mockProfile = { name: 'Existing Profile' };
      const mockCollection = {
        findOne: jest.fn().mockResolvedValue(mockProfile),
      };
      const mockDb = {
        collection: jest.fn().mockReturnValue(mockCollection),
      };
      (connectToDatabase as jest.Mock).mockResolvedValue(mockDb);

      const mockRequest = new NextRequest('http://localhost', { method: 'GET' });

      // Act: Call the GET handler
      const response = await GET(mockRequest);
      const json = await response.json();

      // Assert: Verify the response
      expect(response.status).toBe(200);
      expect(json).toEqual(mockProfile);
      expect(connectToDatabase).toHaveBeenCalledTimes(1);
      expect(mockDb.collection).toHaveBeenCalledWith('profiles');
      expect(mockCollection.findOne).toHaveBeenCalledWith({});
    });

    it('returns 404 when no profile is found', async () => {
      // Arrange
      const mockCollection = {
        findOne: jest.fn().mockResolvedValue(null),
      };
      const mockDb = {
        collection: jest.fn().mockReturnValue(mockCollection),
      };
      (connectToDatabase as jest.Mock).mockResolvedValue(mockDb);

      const mockRequest = new NextRequest('http://localhost', { method: 'GET' });

      // Act
      const response = await GET(mockRequest);
      const json = await response.json();

      // Assert
      expect(response.status).toBe(404);
      expect(json).toEqual({ error: 'Profile not found' });
      expect(mockCollection.findOne).toHaveBeenCalledWith({});
    });

    it('returns 500 when database connection fails', async () => {
      // Arrange
      (connectToDatabase as jest.Mock).mockRejectedValue(new Error('Connection failed'));

      const mockRequest = new NextRequest('http://localhost', { method: 'GET' });

      // Act
      const response = await GET(mockRequest);
      const json = await response.json();

      // Assert
      expect(response.status).toBe(500);
      expect(json).toEqual({ error: 'Internal server error' });
      expect(connectToDatabase).toHaveBeenCalledTimes(1);
    });
  });

  /** Tests for POST Handler */
  describe('POST', () => {
    it('inserts a new profile and returns the inserted ID', async () => {
      // Arrange
      const newProfile = { name: 'New Profile' };
      const insertedId = '12345';
      const mockCollection = {
        insertOne: jest.fn().mockResolvedValue({ insertedId }),
      };
      const mockDb = {
        collection: jest.fn().mockReturnValue(mockCollection),
      };
      (connectToDatabase as jest.Mock).mockResolvedValue(mockDb);

      const mockRequest = new NextRequest('http://localhost', {
        method: 'POST',
        body: JSON.stringify(newProfile),
      });

      // Act
      const response = await POST(mockRequest);
      const json = await response.json();

      // Assert
      expect(response.status).toBe(201);
      expect(json).toEqual({ insertedId });
      expect(connectToDatabase).toHaveBeenCalledTimes(1);
      expect(mockDb.collection).toHaveBeenCalledWith('profiles');
      expect(mockCollection.insertOne).toHaveBeenCalledWith(newProfile);
    });

    it('returns 500 when insertion fails', async () => {
      // Arrange
      const newProfile = { name: 'New Profile' };
      const mockCollection = {
        insertOne: jest.fn().mockRejectedValue(new Error('Insertion failed')),
      };
      const mockDb = {
        collection: jest.fn().mockReturnValue(mockCollection),
      };
      (connectToDatabase as jest.Mock).mockResolvedValue(mockDb);

      const mockRequest = new NextRequest('http://localhost', {
        method: 'POST',
        body: JSON.stringify(newProfile),
      });

      // Act
      const response = await POST(mockRequest);
      const json = await response.json();

      // Assert
      expect(response.status).toBe(500);
      expect(json).toEqual({ error: 'Failed to create profile' });
      expect(mockCollection.insertOne).toHaveBeenCalledWith(newProfile);
    });

    it('returns 500 when database connection fails', async () => {
      // Arrange
      (connectToDatabase as jest.Mock).mockRejectedValue(new Error('Connection failed'));

      const mockRequest = new NextRequest('http://localhost', {
        method: 'POST',
        body: JSON.stringify({ name: 'New Profile' }),
      });

      // Act
      const response = await POST(mockRequest);
      const json = await response.json();

      // Assert
      expect(response.status).toBe(500);
      expect(json).toEqual({ error: 'Failed to create profile' });
      expect(connectToDatabase).toHaveBeenCalledTimes(1);
    });
  });
});