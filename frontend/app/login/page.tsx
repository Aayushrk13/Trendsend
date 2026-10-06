import { Button } from "@/components/ui/button";
import Panel from "./panel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ThemeToggle from "@/components/layout/themetoggle";
import { signIn } from "@/auth";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mr-3 h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

export default function LoginPage() {
  async function handleGoogleSignin() {
    "use server";
    await signIn("google", {
      redirectTo: "/",
    });
  }

  return (
    <main className="relative flex h-dvh items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_25%),linear-gradient(to_br,_background_0%,_muted_100%)] p-4 sm:p-6">
      <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-md">
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          <section className="hidden md:flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-10 text-white">
            <div className="space-y-6">
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
                Live trend intelligence
              </div> */}

              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-200/80">
                  Trendsend
                </p>
                <h1 className="max-w-xs text-4xl font-semibold leading-tight tracking-tight">
                  See what your audience is about to feel.
                </h1>
              </div>
            </div>
            <Panel />
          </section>

          <section className="flex items-center justify-center p-6 sm:p-8 md:p-10">
            <Card className="w-full max-w-md border-0 bg-transparent shadow-none">
              <CardHeader className="space-y-4 pb-6 text-center md:text-left">
                {/*Keep a logo here if you create one*/}
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary md:mx-0">
                  T
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-3xl font-semibold tracking-tight text-foreground">
                    Welcome back
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Sign in to continue to Trendsend.
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                <form action={handleGoogleSignin} className="space-y-4">
                  <Button
                    type="submit"
                    variant="outline"
                    className="group h-12 w-full justify-center rounded-xl border-border/80 bg-background text-base font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-foreground dark:hover:bg-violet-500/10"
                  >
                    <GoogleIcon />
                    Continue with Google
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="bg-card px-2">Secure access</span>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground md:text-left">
                  By continuing, you agree to our Terms and Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
