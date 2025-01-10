import { useEffect, useState } from 'react';
import uploadIcon from '../assets/images/icon-upload.svg';
import { useNavigate } from 'react-router';

type FormData = {
  avatar?: File | null;
  fullName: string;
  email: string;
  githubUsername: string;
};

const DEFAULT_AVATAR =
  'https://robohash.org/set_set3/bgset_bg2/3.14159?size=500x500';

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    avatar: null,
    fullName: '',
    email: '',
    githubUsername: '',
  });
  const [fileError, setFileError] = useState<string>('');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateFile = (file: File): boolean => {
    if (file.size > 500 * 1024) {
      setFileError('File too large. Please upload a photo under 500KB.');
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      setFormData({
        ...formData,
        avatar: file,
      });
      setFileError('');
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      console.log({ file });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.avatar) {
      const reader = new FileReader();
      reader.onloadend = () => {
        navigate('ticket', {
          state: {
            ...formData,
            avatarUrl: reader.result,
            githubUsername: `@${formData.githubUsername}`,
          },
        });
      };
      reader.readAsDataURL(formData.avatar);
    } else {
      navigate('ticket', {
        state: {
          ...formData,
          avatarUrl: DEFAULT_AVATAR,
          githubUsername: `@${formData.githubUsername}`,
        },
      });
    }
    console.log({ formData });
  };

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  return (
    <section id="index-page">
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>

      <p>Secure your spot at next year's biggest coding conference.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="avatar">
            Upload Avatar
            <div className="upload-wrapper">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="image/png, image/jpg"
                onChange={handleFileChange}
              />
              <div className="upload-icon-wrapper">
                <div>
                  <img
                    aria-hidden="true"
                    src={avatarPreview ? avatarPreview : uploadIcon}
                    alt="upload icon"
                    width="30"
                    height="30"
                  />
                </div>
                {!avatarPreview ? (
                  <p>Drag and drop or click to upload</p>
                ) : null}
              </div>
            </div>
          </label>
          <div className={`file-upload-info ${fileError ? 'file-error' : ''}`}>
            <InfoIcon />
            <p>
              {fileError
                ? fileError
                : 'Upload your photo (JPG or PNG, max size: 500KB).'}
            </p>
          </div>
        </div>

        <label htmlFor="fullName">
          Full Name
          <input
            type="text"
            placeholder="John Doe"
            name="fullName"
            id="fullName"
            required
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="email">
          Email Address
          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            id="email"
            required
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="githubUsername">
          GitHub Username
          <input
            type="text"
            placeholder="@yourusername"
            name="githubUsername"
            id="githubUsername"
            required
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Generate My Ticket</button>
      </form>
    </section>
  );
}

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="#D1D0D5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
      />
      <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
      <path
        stroke="#D1D0D5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.004 10.462V7.596M8 5.569v-.042"
      />
    </svg>
  );
};
