export default function ReviewsLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          border: "solid 1px #ccc",
          padding: "2rem",
          margin: "1rem",
          width: "20%",
        }}
      >
        [side bae]
      </div>

      <div>{children}</div>
    </div>
  );
}
