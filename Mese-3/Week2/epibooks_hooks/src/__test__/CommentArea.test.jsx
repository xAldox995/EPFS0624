import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";
import scifi from "../data/scifi.json" 

// V - TO DO : VERIFICARE CHE COMMENT AREA SI MONTI CORRETTAMENTE

describe("comment list behavior", () => {
  it("doesn't render any comment item initially", () => {
    render(<CommentArea />);
    const allCommentItems = screen.queryAllByTestId("comment-element");
    expect(allCommentItems).toHaveLength(0);
  });

  it("should have comment list when component is fully loads", async () => {
    render(<CommentArea asin={scifi[0].asin}/>);
    const allCommentItems = await screen.findAllByTestId("comment-element");
    expect(allCommentItems.length).toBeGreaterThan(0);
  });
});
