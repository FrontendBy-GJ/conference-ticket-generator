import infoIcon from '../assets/images/icon-info.svg';
import uploadIcon from '../assets/images/icon-upload.svg';

export default function Home() {
  return (
    <section id="index-page">
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>

      <p>Secure your spot at next year's biggest coding conference.</p>

      <form>
        <div>
          <label htmlFor="avatar">
            Upload Avatar
            <div className="upload-wrapper">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="image/png, image/jpg"
              />
              <div className="upload-icon-wrapper">
                <div>
                  <img
                    aria-hidden="true"
                    src={uploadIcon}
                    alt="upload icon"
                    width="30"
                    height="30"
                  />
                </div>
                <p>Drag and drop or click to upload</p>
              </div>
            </div>
          </label>
          <div className="file-upload-info">
            <img
              aria-hidden="true"
              src={infoIcon}
              alt="information icon"
              width="16"
              height="16"
            />
            <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
          </div>
        </div>

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
