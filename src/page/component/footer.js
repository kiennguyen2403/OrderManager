import React from "react";

export default function Footer() {
  return (
    <footer>
      <ul id="footer">
        <div id="logo_footer">
          <li>Goto</li>
        </div>

        <div id="text_footer">
          <li>
            <ul id="Contact">
              <li className="heading">Contact </li>
              <li>
                <a href="mailto:kientdn2403@gmail.com">Gmail</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100013395218389">
                  Facebook
                </a>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </footer>
  );
}

