'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign in to your account</CardTitle>
          <CardDescription>Enter your email and password to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn.Root>
            <SignIn.Step name="start">
              <Clerk.Connection name="google">
                <Button className="w-full">Sign in with Google</Button>
              </Clerk.Connection>

              <Clerk.Field name="identifier">
                <Clerk.Label>Email</Clerk.Label>
                <Clerk.Input required className="w-full" />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit className="w-full">Continue</SignIn.Action>
            </SignIn.Step>

            <SignIn.Step name="verifications">
              <SignIn.Strategy name="email_code">
                <h1>Check your email</h1>
                <p>We sent a code to <SignIn.SafeIdentifier />.</p>

                <Clerk.Field name="code">
                  <Clerk.Label>Email code</Clerk.Label>
                  <Clerk.Input required />
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignIn.Action submit>Continue</SignIn.Action>
              </SignIn.Strategy>

              <SignIn.Strategy name="password">
                <h1>Enter your password</h1>

                <Clerk.Field name="password">
                  <Clerk.Label>Password</Clerk.Label>
                  <Clerk.Input type="password" required />
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignIn.Action submit>Continue</SignIn.Action>
                <SignIn.Action navigate="forgot-password">Forgot password?</SignIn.Action>
              </SignIn.Strategy>
            </SignIn.Step>

            <SignIn.Step name="forgot-password">
              <h1>Forgot your password?</h1>
              <SignIn.SupportedStrategy name="reset_password_email_code">
                Reset password
              </SignIn.SupportedStrategy>
              <SignIn.Action navigate="previous">Go back</SignIn.Action>
            </SignIn.Step>

            <SignIn.Step name="reset-password">
              <h1>Reset your password</h1>

              <Clerk.Field name="password">
                <Clerk.Label>New password</Clerk.Label>
                <Clerk.Input type="password" required />
                <Clerk.FieldError />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword">
                <Clerk.Label>Confirm password</Clerk.Label>
                <Clerk.Input type="password" required />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Reset password</SignIn.Action>
            </SignIn.Step>
          </SignIn.Root>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/sign-up" className="font-medium text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
