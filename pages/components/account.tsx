// import Avatar from "./avatar";
import { useState } from "react";

export default function Account({
  session,
  supabase,
  user,
  loading,
  oldUsername,
  // avatarUrl,
  updateProfile,
  // uploadAvatar,
  // uploadingAvatar,
}) {
  const [newUserName, setNewUserName] = useState(null);

  return (
    <div className="form-widget">
      {/* <Avatar
        size={150}
        uploadAvatar={uploadAvatar}
        uploadingAvatar={uploadingAvatar}
        avatarUrl={avatarUrl}
      /> */}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={newUserName || ""}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username: newUserName })}
          // onClick={() => updateProfile(newUserName, newAvatar)}

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
