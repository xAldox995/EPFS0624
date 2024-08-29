//  V - TO DO: VERIFICARE CHE IL COMPONENTE RENDERIZZA TANTE BOOTSTRAP CARDS
//  - TO DO

import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import scifi from "../data/scifi.json"

describe("render the correct number of SingleBook components", () => {
    it("mount corretly the cards", () => {
      render(<BookList booksArray={scifi}/>)
      const booksCards = screen.getAllByTestId('single-book')
      expect(booksCards.length).toBeGreaterThan(0)
    });
  });
  

