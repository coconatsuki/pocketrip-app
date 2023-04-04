import Avatar from "./avatar";

export default function Account({
  session,
  supabase,
  user,
  loading,
  username,
  setUsername,
  avatarUrl,
  updateProfile,
  uploadAvatar,
  uploadingAvatar,
}) {
  return (
    <div className="form-widget">
      <Avatar
        size={150}
        uploadAvatar={uploadAvatar}
        uploadingAvatar={uploadingAvatar}
        avatarUrl={avatarUrl}
      />
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile(user)}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
