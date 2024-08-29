import { render, screen } from "@testing-library/react";
import WelcomeComponent from "../components/WelcomeComp";


// V - TO DO: VERIFICA CHE IL COMPONENTE WELCOME SI MONTI CORETTAMENTE

describe("render the WelcomeComp with all elements", () => {
  it("mount correctly the navbar", () => {
    render(<WelcomeComponent />);
    const logo = screen.getByAltText("bookLogo");
    expect(logo).toBeInTheDocument();
  });
});



