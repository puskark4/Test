import React from "react";
import "./../styles/global.scss";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import PurchasePage from "./purchase";
import AuthPage from "./auth";
import { Switch, Route, Router } from "./../util/router.js";
import Auth0Callback from "./auth0-callback.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { AuthProvider } from "./../util/auth.js";

function App(props) {
  return (
    <AuthProvider>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/purchase/:plan" component={PurchasePage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route exact path="/auth0-callback" component={Auth0Callback} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            color="white"
            size="medium"
            backgroundImage=""
            backgroundImageOpacity={1}
            description="Koolaglass Tinting"
            copyright="© 2021 Koolaglass"
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
