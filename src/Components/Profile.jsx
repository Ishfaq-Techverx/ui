import UserList from "./UserList";
const Profile = () => {
  return (
    <>
      <div className="profile-wrapper mb-fixed">
        <div className="profile-left">
          <div className="hero-title mb-fixed">
            Lorem ipsum{" "}
            <span style={{ position: "relative" }}>
              <apn className="hero-dolor">dolor </apn>
              <span className="underlined "></span>
            </span>
            sit amet yo 👋
          </div>
          <UserList />
        </div>
        <div
          className="profile-right"
          style={{
            position: "relative",
          }}
        >
          <svg
            className="invest"
            width="605"
            height="669"
            viewBox="0 0 605 669"
            fill="none"
          >
            <rect
              x="0.116943"
              y="22"
              width="572.74"
              height="632"
              fill="url(#pattern0_102_20)"
            />
            <ellipse cx="186.16" cy="85" rx="14.6107" ry="15" fill="#46B0E6" />
            <ellipse cx="559.22" cy="333" rx="14.6107" ry="15" fill="#F89D21" />
            <ellipse
              cx="306.942"
              cy="654"
              rx="14.6107"
              ry="15"
              fill="#F0B80D"
            />
            <ellipse
              cx="38.1044"
              cy="163"
              rx="9.74047"
              ry="10"
              fill="#F0B80D"
            />
            <ellipse
              cx="74.1442"
              cy="658"
              rx="9.74047"
              ry="10"
              fill="#5380EA"
            />
            <ellipse
              cx="552.401"
              cy="493"
              rx="9.74047"
              ry="10"
              fill="#E49192"
            />
            <ellipse cx="595.26" cy="183" rx="9.74047" ry="10" fill="#F0B80D" />
            <ellipse cx="396.554" cy="10" rx="9.74047" ry="10" fill="#E49192" />
            <defs>
              <pattern
                id="pattern0_102_20"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use transform="matrix(0.00109649 0 0 0.000993678 0 0.046883)" />
              </pattern>
              <image id="image0_102_20" width="912" height="912" />
            </defs>
          </svg>
          <div>
            <img
              className="right-widget"
              src={window.location.origin + "/frontimg.png"}
              alt="no"
              style={{ width: "60%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
