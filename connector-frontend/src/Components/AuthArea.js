function AuthArea() {
  return (
    <>
      <div className="auth_area_parent">
        <div className="info_taker">
          <input id="name_of_user" placeholder="Enter your name..."></input>
          <button className="button_1" id="join_room_btn">
            Start
          </button>
        </div>

        <div className="button_area">
          <button className="button_1" id="create_btn">
            Create Room
          </button>
          <button className="button_1" id="join_btn">
            Join Room
          </button>
          <button className="button_1" id="join_random_btn">
            Random Room
          </button>
        </div>
      </div>
    </>
  );
}

export default AuthArea;
