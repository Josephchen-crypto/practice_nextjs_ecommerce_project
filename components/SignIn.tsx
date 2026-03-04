import { SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    // SignInButton mode="modal" is used to render the sign in modal (popup in ower own page)
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:text-dark text-light cursor-pointer hoverEffect">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
