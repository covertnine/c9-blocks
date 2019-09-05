// sections
import faqTogglesWithHeading from "./section-templates/faq-toggles-with-heading";
import headerWith3Modules from "./section-templates/header-with-3-modules";
import missionStatement from "./section-templates/mission-statement";
import serviceOfferingHeader from "./section-templates/service-offering-header";
import videoBackgroundCallToAction from "./section-templates/video-background-call-to-action";

// pages
import restaurantMenuLandingPage from "./page-templates/restaurant-menu-landing-page";
import serviceLandingPage from "./page-templates/service-landing-page";
import testBlocks from "./page-templates/test-blocks";

const templateMarkups = {
	layouts: {
		restaurantMenuLandingPage,
		serviceLandingPage,
		testBlocks
	},
	sections: {
		faqTogglesWithHeading,
		headerWith3Modules,
		missionStatement,
		serviceOfferingHeader,
		videoBackgroundCallToAction
	}
};

export default templateMarkups;
