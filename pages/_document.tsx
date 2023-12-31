import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>

      <>
        <div className="d-none d-md-block">
          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>
        </div>
        <div className="d-none d-md-block">show only desktop size</div>

        <script
          dangerouslySetInnerHTML={{
            __html: ` chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "397245167074344");
                chatbox.setAttribute("attribution", "biz_inbox");
                </script>
                <script>
                window.fbAsyncInit = function() {
                FB.init({
                xfbml            : true,
                version          : 'v11.0'
                });
                };
                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));`,
          }}
        ></script>
      </>
    </Html>
  );
}
