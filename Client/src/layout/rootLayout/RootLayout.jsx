import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import logo from "/logo.png";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
      <div className="rootLayout">
        <header>
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
            <span>LAMA AI</span>
          </Link>
          <div className="user">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
