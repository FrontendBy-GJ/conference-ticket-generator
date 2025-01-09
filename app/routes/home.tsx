export default function Home() {
  return (
    <section id="index-page">
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>

      <p>Secure your spot at next year's biggest coding conference.</p>

      <form>
        Upload Avatar Drag and drop or click to upload Upload your photo (JPG or
        PNG, max size: 500KB).
        <label htmlFor="full-name">
          Full Name
          <input
            type="text"
            placeholder="John Doe"
            name="full-name"
            id="full-name"
            required
          />
        </label>
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="username">
          GitHub Username
          <input
            type="text"
            placeholder="@yourusername"
            name="username"
            id="username"
          />
        </label>
        <button type="submit">Generate My Ticket</button>
      </form>
    </section>
  );
}
