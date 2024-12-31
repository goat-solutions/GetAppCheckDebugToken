"use client"

import { getApp, getApps, initializeApp } from "firebase/app"
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"
import { useEffect } from "react"

// Replace with your own Firebase project config
const FIREBASE_API_KEY = ""
const FIREBASE_PROJECT_ID = ""
const RECAPTCHA_SITE_KEY = ""

export default function Home() {

    const firebaseConfig = {
        apiKey: FIREBASE_API_KEY,
        projectId: FIREBASE_PROJECT_ID,
    }

    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

    useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
            Object.assign(window, {
                FIREBASE_APPCHECK_DEBUG_TOKEN: true,
            })
        }
        initializeAppCheck(app, {
            provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
            isTokenAutoRefreshEnabled: true,
        })
    }, [])

    return (
        <>
            Get App Check Debug Token from console.
        </>
    )
}
