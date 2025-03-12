import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    name: String,
    bio: String
})

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

export default Profile;