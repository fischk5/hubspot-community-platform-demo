"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Mode = "Member" | "Admin";

interface ModeContextType {
    mode: Mode;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
    const [mode] = useState<Mode>("Member")

    return (
        <ModeContext.Provider value={{ mode }}>
            { children }
        </ModeContext.Provider>
    )
}

export function useMode() {
    const context = useContext(ModeContext);
    if (!context) throw new Error("useMode must be used within a ModeProvider")
    return context
}