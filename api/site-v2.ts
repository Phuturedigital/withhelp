import siteHandler from './site';

export const config = { runtime: 'edge' };

type Pair = [string, string];

function replaceMany(input: string, pairs: Pair[]) {
  return pairs.reduce((result, [from, to]) => result.replaceAll(from, to), input);
}

function replaceMain(html: string, content: string) {
  const start = html.indexOf('<main>');
  const end = html.indexOf('</main>');
  if (start < 0 || end < 0) return html;
  return html.slice(0, start) + `<main>${content}</main>` + html.slice(end + 7);
}

function globalCopy(html: string) {
  return replaceMany(html, [
    ['WITH. is a South African personal safety network built to help before, during and after danger.', 'WITH. is building shared safety infrastructure around women in South Africa, connecting personal protection, staffed places, responders and organisations before, during and after danger.'],
    ['The WITH. app is launching soon. Join the launch list.', 'WITH. is building a stronger safety network around women. Join the launch.'],
    ['Join early', 'Join the launch'],
    ['Join the launch list', 'Join the launch'],
    ['WITH. is launching as a personal safety network. Until launch, it is not an emergency service, security company or substitute for SAPS, EMS or other emergency services.', 'WITH. is building a South African safety network around the idea that safety should start before the emergency. Live emergency coverage is not active yet. WITH. is not a substitute for SAPS, EMS or other emergency services.'],
    ['Ask WITH. product guide', 'Ask about WITH.'],
    ['This teaches the product. It cannot monitor, locate or dispatch help.', 'Learn how protection, Assistance Points, response and partnerships are designed to work. Ask WITH. cannot dispatch emergency help.'],
    ['The target is to keep core protection free and fund the network through organisations, sponsorship and optional professional response coverage.', 'The goal is to keep core protection at R0 for the individual. Organisation subscriptions help fund the network, coverage, response capacity and broader prevention work.'],
  ]);
}

function homeCopy(html: string) {
  return replaceMany(html, [
    ['Personal safety network · launching in South Africa', 'Shared safety infrastructure · launching in South Africa'],
    ['WITH. connects protection, trusted people, nearby staffed help and professional response into one continuity layer around the moments you choose to protect.', 'WITH. is being built to help women start protection before something goes wrong, keep people they trust in the loop and reach practical help if a situation changes.'],
    ['Explore the app', 'See how WITH. works'],
    ['Protection should feel simple to start.', 'Start with the moment you want protected.'],
    ['Choose what is happening now. WITH. prepares the right context without exposing the whole system at once.', 'You should not need to understand the whole safety system before using it. Choose what is happening now and WITH. prepares the right protection around that moment.'],
    ['Check readiness and know where help could be.', 'Check whether your protection setup is ready before you need it.'],
    ['Protect a journey, ride or short vulnerable moment.', 'Protect a journey from A to B, or another moment where you want someone or something watching.'],
    ['Prepare quietly around concern involving someone known.', 'Prepare private check-ins and support around concern involving someone you know.'],
    ['People are often left to coordinate separate systems while stressed. WITH. gives those parts one continuity layer around the person.', 'When something goes wrong, people are often left to coordinate phones, family, businesses, security and emergency services themselves. WITH. is designed to keep those parts moving around one protected person.'],
    ['continuity layer', 'connected network'],
    ['Proposed network model. WITH. coordinates existing support; it does not replace emergency or professional services.', 'Proposed network model. WITH. is designed to connect existing support, not replace emergency or professional services.'],
    ['Try the core WITH. flows here without leaving the website. Start a Guardian journey, run a Safety Countdown, explore nearby help or review your Trusted Circle.', 'See what starting protection could feel like. Try Guardian, a Safety Countdown and other core flows in the interactive preview.'],
    ['Clear about launch readiness.', 'A real preview, not fake coverage.'],
    ['No live tracking, dispatch or emergency response is connected.', 'The preview demonstrates the experience without pretending live response or Assistance Point coverage already exists.'],
    ['A protected journey could connect a person to several types of staffed Assistance Point and a wider response path.', 'Imagine finishing a protected journey with several verified staffed places nearby that know what to do if you need help.'],
    ['Personal value first. Stronger infrastructure as participation grows.', 'Useful from the first protected moment. Stronger as the network grows.'],
    ['Individuals activate protection. Places create practical help options. Organisations can fund access and connect existing capacity.', 'Women can start protection from the first installation. Businesses can add staffed places. Security providers can add response capacity. Organisation subscriptions help fund the network and keep core protection at R0.'],
    ['Use Guardian, Countdown, Trusted Circle and SOS from the first installation.', 'Start a protected journey or vulnerable moment from the first installation.'],
    ['Verified Assistance Points create more practical destinations for support.', 'Participating businesses can create more staffed places where someone can reach practical help.'],
    ['Sponsors and response partners can expand access without owning private movement.', 'Organisations can subscribe, contribute infrastructure and connect response capacity so the network can scale.'],
    ['See where organisations fit', 'See how organisations can contribute'],
  ]);
}

function missionCopy(html: string) {
  return replaceMany(html, [
    ['WITH. connects personal safety infrastructure available before the crisis, resilient during it and useful after it.', 'WITH. is being built so women can start protection before a crisis, stay connected to help while something is unfolding and still have support after the immediate moment has passed.'],
    ['They should not have to remember which provider covers which road, whether a friend saw a message, whether an app is still running or which system to contact first. Technology should carry more of that burden.', 'Walking to a car, taking a ride, leaving work late or going home should not require someone to coordinate several safety systems in their head. Technology should carry more of that burden.'],
    ['Because safety should not mean being alone.', 'Better safety should exist around the person, not only on her phone.'],
    ['With your people.</p><p>With nearby help.</p><p>With the devices you already use.</p><p>With professional response where it is available and appropriate.</p><p>With a network that remembers enough to continue when one layer fails.', 'With the people you trust.</p><p>With the phone already in your hand.</p><p>With practical places to reach help.</p><p>With professional response where it is available.</p><p>With businesses, institutions, government and communities helping build stronger infrastructure around you.'],
    ['Connect the parts people already depend on.', 'Connect the people, places and response capacity that already exist.'],
    ['South Africa has safety infrastructure. WITH. gives those separate parts a clearer way to work together.', 'South Africa already has people, places, responders and support services doing parts of this work. WITH. is being built to help those pieces work together earlier and more clearly.'],
    ['Devices', 'Start'],
    ['Phones and optional watches carry the experience.', 'A woman starts protection from the phone already in her hand.'],
    ['A Trusted Circle provides chosen human support.', 'People she trusts can become part of the active protection process.'],
    ['Staffed Assistance Points offer somewhere to go.', 'Participating staffed places can provide somewhere practical to reach help.'],
    ['Professional and public services remain part of the chain.', 'Security, emergency services and specialist support remain essential parts of the wider network.'],
    ['One protected journey can open several paths.', 'A stronger network can start with one protected journey.'],
    ['Personal value exists first. Participation can then create evidence of demand and clearer opportunities for places and organisations to join.', 'Personal value comes first. As more people and organisations participate, the network can build more places, response capacity and support around the moments women choose to protect.'],
  ]);
}

function howCopy(html: string) {
  return replaceMany(html, [
    ['One protection engine. Different moments of risk.', 'Different moments. One simple way to start protection.'],
    ['The interface stays simple while the underlying system prepares, guards, notices, verifies, acts, reaches help and supports recovery.', 'Choose what is happening now. WITH. is designed to keep the right context, people and help around that protected moment.'],
    ['Know what is ready and where help could be before protection is active.', 'Check whether your protection setup is ready before you need it.'],
    ['Protect a journey, ride, walk, drive or short vulnerable moment.', 'Protect a journey from A to B, or another moment where you want someone or something watching.'],
    ['Prepare quietly for concern involving someone the user knows.', 'Prepare private check-ins and support around concern involving someone you know.'],
    ['Once escalation begins, losing the device should not erase the protection state. The server keeps the last trusted context and the incident remains open until an authorised resolution.', 'If a phone goes offline, is taken or becomes unavailable after an incident starts, the safety process should not simply disappear with it. WITH. is designed to preserve the last confirmed context and keep other support paths moving.'],
    ['Guardian records the active session, expected journey and lightweight state updates.', 'The phone starts the protected journey or countdown.'],
    ['Server preserves context', 'WITH. keeps the latest context'],
    ['The latest confirmed heartbeat, location context and incident state remain available.', 'The latest confirmed protection state can remain available even if the phone stops communicating.'],
    ['Trusted people and response paths do not depend on one phone or acknowledgement.', 'Trusted people and response paths should not depend on one device or one acknowledgement.'],
    ['Make response measurable.', 'Know whether help has actually moved.'],
    ['An incident moves through explicit states so “alert sent” is never confused with help acknowledged or arriving.', 'An incident should show clear states so “alert sent” is never confused with “acknowledged” or “on the way.”'],
    ['Safety moves in a circle, not a single emergency moment.', 'Safety should support the moment before, the response during it and what comes after.'],
    ['Each layer carries context forward, from preparation through response and recovery, then feeds learning back into readiness.', 'WITH. is designed to support more than the emergency moment itself.'],
    ['Proposed architecture principle. Fallback capabilities will be validated through controlled pilot testing.', 'Design principle. These fallback paths must be proven through controlled reliability testing and pilots.'],
  ]);
}

function assistanceCopy(html: string) {
  return replaceMany(html, [
    ['A place that knows how to receive and connect help.', 'A place that knows what to do when someone needs help.'],
    ['The value is not a sticker on a door. It is a verified process that stays current, visible and connected to the wider incident.', 'The value is not a sticker on a door. It is a staffed place with a clear receiving process and a defined path to further help.'],
    ['VERIFIED LOCATION', 'VERIFIED PLACE'],
    ['LIVE STATUS', 'CURRENTLY STAFFED'],
    ['STAFF PROCEDURE', 'SIMPLE STAFF PROCESS'],
    ['RESPONSE LINK', 'CLEAR ESCALATION PATH'],
    ['PERIODIC REVIEW', 'REGULAR RE-CHECK'],
    ['A protected journey could connect a person to several types of staffed Assistance Point and a wider response path.', 'A local WITH. network could connect a protected journey to several staffed places and a wider response path.'],
    ['Illustrative only. The locations and route demonstrate how a local network could work. They are not live WITH. coverage or current partners.', 'Illustrative example. These are not live WITH. locations or current partners.'],
    ['The network becomes more useful as more people and places participate.', 'Every participating place can strengthen the physical network around women.'],
    ['Personal value comes first. Participation can then create the case for stronger local infrastructure without selling anyone’s raw movement history.', 'Women can use personal protection first. As businesses, properties, campuses and responders join, the network can add more practical places and response capacity.'],
    ['More journeys', 'More protected moments'],
    ['Governed, aggregated signals show where support may be needed.', 'Real pilot use can help show where physical coverage and response capacity are still missing.'],
    ['More sponsors', 'More organisations'],
    ['Organisations can fund access for defined communities.', 'Organisation subscriptions can help keep core protection at R0 and fund network expansion.'],
    ['Connected response', 'More response capacity'],
    ['Structured incidents can reach professional response partners.', 'Security and response partners can connect existing capacity into the network.'],
  ]);
}

function joinCopy(html: string) {
  return replaceMany(html, [
    ['Help shape WITH. before launch.', 'Join the people and organisations helping build WITH.'],
    ['We are looking for people and organisations willing to help test the problem, the behaviour and the operating model before bigger claims are made.', 'Join the launch if you want to test WITH. personally, contribute infrastructure, connect response capacity or explore how your organisation could participate.'],
    ['This network needs more than users.', 'Join as a user or help build the network around women.'],
    ['Individuals, businesses, employers, campuses, banks, insurers, property groups, response providers, GBV organisations, public institutions and policy leaders can all help build different parts of the network.', 'Individuals can help test the experience. Businesses can contribute places. Security companies can contribute response capacity. Organisations can subscribe. Government, NGOs and community organisations can strengthen public, prevention and recovery pathways.'],
    ['Tell us how you want to participate.', 'Tell us what part of the network you want to help build.'],
    ['Launching responsibly. No emergency coverage yet.', 'Join the launch. Live emergency coverage is not active yet.'],
    ['Joining may lead to launch updates, product feedback, early access or partnership discussions. It does not mean WITH. is monitoring you or providing a live safety service today.', 'Joining may lead to testing, early access, pilot planning or partnership discussions. It does not activate a live safety service today.'],
    ['Individuals and organisations enter through different doors.', 'There are different ways to contribute.'],
    ['Choose the closest role in the form. We will use that context to make the next conversation relevant.', 'Choose the role closest to you. We will use it to understand whether you want to use WITH. or help build part of the wider network.'],
  ]);
}

function organisationsMain() {
  return `<section class="pageHero"><div class="wrap"><div class="crumb"><a href="/">WITH.</a> / Organisations</div><div class="ey">Help build the safety network</div><h1>Help us build better safety infrastructure around women.</h1><p class="lead">WITH. cannot build a meaningful safety network alone. Businesses, security companies, employers, universities, banks, insurers, property groups, NGOs, government and communities already hold different pieces of the solution.</p><div class="actions"><a class="btn" href="/join">Help build the network</a><a class="btn alt" href="#pilot">Explore a pilot</a></div></div></section>
<section class="storyBand"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="network"></i> Shared infrastructure</span><h2>Keeping women safer cannot be the responsibility of women alone.</h2></div><p>Women already plan routes, share locations, call friends, change transport and work out who to contact. WITH. asks what businesses, institutions, responders, government and communities can contribute so the individual carries less of that burden.</p></div><div class="roleGrid"><article class="roleCard"><i data-lucide="hand-coins"></i><h3>Subscribe</h3><p>Recurring organisation subscriptions help operate and expand the network.</p><strong>Keep core protection at R0</strong></article><article class="roleCard"><i data-lucide="store"></i><h3>Contribute places</h3><p>Turn suitable staffed locations into verified Assistance Points.</p><strong>Build physical coverage</strong></article><article class="roleCard"><i data-lucide="radio"></i><h3>Contribute response</h3><p>Connect control rooms, responders and existing security capacity.</p><strong>Strengthen the response layer</strong></article><article class="roleCard"><i data-lucide="landmark"></i><h3>Connect public infrastructure</h3><p>Government and public institutions can connect services, facilities and programmes.</p><strong>Build public-private pathways</strong></article><article class="roleCard"><i data-lucide="heart-handshake"></i><h3>Strengthen support</h3><p>NGOs and GBV organisations can connect specialist prevention, recovery and survivor support.</p><strong>Extend beyond the incident</strong></article><article class="roleCard"><i data-lucide="users"></i><h3>Reach communities</h3><p>Employers, campuses, banks, insurers and property groups already serve large communities.</p><strong>Help the network scale</strong></article></div></div></section>
<section class="storyBand soft"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="repeat-2"></i> Sustainable by design</span><h2>Organisations subscribe. Core protection stays R0.</h2></div><p>The subscription is not only payment for software seats. Recurring organisation revenue helps fund the infrastructure around the free personal experience.</p></div><div class="sponsorExchange"><article class="exchangeNode"><i><span data-lucide="building-2"></span></i><h3>Organisations subscribe</h3><p>Employers, campuses, banks, insurers, property groups and other institutions contribute recurring revenue.</p></article><div class="exchangeArrow">→<span>fund</span></div><article class="exchangeNode people"><i><span data-lucide="shield-check"></span></i><h3>Core protection stays R0</h3><p>Women can use the core personal protection experience without carrying the full cost of the network themselves.</p></article><div class="exchangeArrow">→<span>scale</span></div><article class="exchangeNode insight"><i><span data-lucide="network"></span></i><h3>WITH. builds more</h3><p>Revenue can support coverage, response integrations, reliability, pilots, prevention and recovery partnerships.</p></article></div></div></section>
<section class="storyBand"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="building-2"></i> Bring the piece you already have</span><h2>No organisation has to build the whole solution.</h2></div><p>The strength comes from different partners contributing what they are already positioned to provide.</p></div><div class="roleGrid"><article class="roleCard"><i data-lucide="briefcase-business"></i><h3>Employers</h3><p>Subscribe, support late or travelling staff, connect company security and strengthen coverage around workplaces.</p><strong>Protect beyond the office door</strong></article><article class="roleCard"><i data-lucide="graduation-cap"></i><h3>Universities</h3><p>Connect student access, campuses, residences, security and support services.</p><strong>Build around students</strong></article><article class="roleCard"><i data-lucide="landmark"></i><h3>Banks & insurers</h3><p>Subscribe, distribute access and help fund preventative infrastructure at scale.</p><strong>Support prevention before the crisis</strong></article><article class="roleCard"><i data-lucide="building"></i><h3>Property groups</h3><p>Connect properties, receptions, residents, precincts and existing security teams.</p><strong>Strengthen local coverage</strong></article><article class="roleCard"><i data-lucide="store"></i><h3>Retail & hospitality</h3><p>Contribute staffed locations that can become verified Assistance Points.</p><strong>Add a door someone can walk through</strong></article><article class="roleCard"><i data-lucide="radio"></i><h3>Security companies</h3><p>Connect control rooms and responders so an incident can move from request to acknowledgement, assignment and arrival.</p><strong>Improve response capacity</strong></article><article class="roleCard"><i data-lucide="landmark"></i><h3>Government</h3><p>Connect public facilities, emergency services, safety programmes and public-private pilots.</p><strong>Link public infrastructure</strong></article><article class="roleCard"><i data-lucide="heart-handshake"></i><h3>NGOs & community organisations</h3><p>Strengthen safety planning, counselling, shelter, legal, prevention and recovery pathways.</p><strong>Bring specialist human support</strong></article><article class="roleCard"><i data-lucide="waypoints"></i><h3>WITH.</h3><p>Operate the connective technology and shared network so these contributions can work together around the protected person.</p><strong>Connect the pieces</strong></article></div></div></section>
<section class="storyBand soft"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="trending-up"></i> What scale enables</span><h2>The stronger the organisation network becomes, the more WITH. can do.</h2></div><p>Recurring subscriptions can keep the core app at R0 while giving the network capacity to improve physical coverage, connect more response capacity and invest beyond the immediate incident.</p></div><div class="growthFlow"><article class="growthStep active"><strong>01</strong><h3>R0 access</h3><p>Keep core personal protection accessible to the woman using it.</p></article><article class="growthStep"><strong>02</strong><h3>Better coverage</h3><p>Verify more Assistance Points and expand into more areas.</p></article><article class="growthStep"><strong>03</strong><h3>Better response</h3><p>Connect more response partners and measure acknowledgement and response performance.</p></article><article class="growthStep"><strong>04</strong><h3>More prevention</h3><p>Support self-defence, safety education, community programmes and GBV prevention through credible partners.</p></article><article class="growthStep"><strong>05</strong><h3>More recovery support</h3><p>Strengthen pathways into counselling, shelters, legal support and specialist GBV organisations.</p></article></div><p class="diagramNote"><i data-lucide="info"></i><span>Better coverage and response performance must be demonstrated through real pilots and operating data, not assumed in advance.</span></p></div></section>
<section class="storyBand dark"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="radio"></i> Response capacity</span><h2>Connect what already exists instead of rebuilding it from zero.</h2></div><p>South Africa already has security control rooms, patrol vehicles, campus security, estate security, public emergency services and specialist support. WITH. is being built to connect those capabilities into a clearer path around the active incident.</p></div><div class="failureGrid"><article class="failureItem"><b><i data-lucide="store"></i>More businesses</b><span>More staffed places women may be able to reach for practical help.</span></article><article class="failureItem"><b><i data-lucide="radio"></i>More security partners</b><span>More available response capacity and fewer single-provider dependencies.</span></article><article class="failureItem"><b><i data-lucide="landmark"></i>Government participation</b><span>Better connection to public facilities, services and safety programmes.</span></article><article class="failureItem"><b><i data-lucide="heart-handshake"></i>NGO participation</b><span>Better prevention, specialist support and recovery pathways after the immediate incident.</span></article></div><p class="diagramNote" style="color:#aeb3af"><i data-lucide="info"></i><span>The goal is better coverage, better infrastructure, better coordination and better response through partnership.</span></p></div></section>
<section class="storyBand" id="pilot"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="milestone"></i> Start small</span><h2>You do not need to solve the whole country to contribute.</h2></div><p>Start with one office, campus, property, retail group, community, customer group, corridor or response region. Test the operating model before expanding.</p></div><div class="journeySteps"><article class="journeyStep"><h3>Choose</h3><p>Define the population, place or area.</p></article><article class="journeyStep"><h3>Contribute</h3><p>Subscription, places, response or support.</p></article><article class="journeyStep"><h3>Pilot</h3><p>Run a focused real-world test.</p></article><article class="journeyStep"><h3>Measure</h3><p>Usage, coverage and response outcomes.</p></article><article class="journeyStep"><h3>Improve</h3><p>Fix the gaps the pilot exposes.</p></article><article class="journeyStep"><h3>Expand</h3><p>Grow only when the model earns it.</p></article></div></div></section>
<section class="storyBand soft"><div class="wrap split"><div><div class="ey">A note on trust</div><h2>Safety data has its own rules.</h2></div><div class="copy"><p>WITH. is designed around active protection events rather than permanent location histories. Detailed data, access and retention rules live on the dedicated Trust and Privacy pages.</p><a class="btn alt" href="/trust">See how WITH. handles safety data</a></div></div></section>
<section><div class="wrap cta"><div class="split"><div><div class="ey">The invitation</div><h2>What part of the network could you contribute?</h2><p>You may already have a location, security team, fleet, customer base, campus, property portfolio, public infrastructure, community expertise, support service, technology or distribution. Or you may simply be able to subscribe and help keep core protection at R0.</p></div><div><a class="btn" href="/join">Help build the network</a></div></div></div></section>`;
}

function trustMain() {
  return `<section class="pageHero"><div class="wrap"><div class="crumb"><a href="/">WITH.</a> / Trust</div><div class="ey">Safety without surveillance</div><h1>Protection should follow the event, not the person.</h1><p class="lead">WITH. is designed around the protected moment happening now. A Guardian journey, Countdown or incident begins, uses the context needed for that event and then closes.</p></div></section>
<section class="storyBand"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="route"></i> Closed-loop protection</span><h2>Real-time protection does not require a permanent whereabouts history.</h2></div><p>The system should understand enough about the active protection event to know whether it completed normally or whether the safety process needs to continue.</p></div><div class="diagramFlow"><article class="diagramNode"><span class="diagramStep">01</span><span class="diagramIcon"><i data-lucide="toggle-right"></i></span><h3>Start</h3><p>The user chooses to start Guardian, Countdown or another protected moment.</p><span class="diagramArrow">→</span></article><article class="diagramNode"><span class="diagramStep">02</span><span class="diagramIcon"><i data-lucide="navigation"></i></span><h3>Protect</h3><p>WITH. uses the context needed while that protection event is active.</p><span class="diagramArrow">→</span></article><article class="diagramNode"><span class="diagramStep">03</span><span class="diagramIcon"><i data-lucide="message-circle-question"></i></span><h3>Resolve</h3><p>The event ends safely or moves into a help flow when something requires action.</p><span class="diagramArrow">→</span></article><article class="diagramNode"><span class="diagramStep">04</span><span class="diagramIcon"><i data-lucide="circle-check"></i></span><h3>Close</h3><p>Routine protection closes with the event instead of becoming a permanent movement record.</p></article></div></div></section>
<section class="storyBand soft"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="lock-keyhole"></i> Purpose first</span><h2>WITH. should know what is happening in the active protection event, not where someone has been all week.</h2></div><p>Incident evidence may need different retention because it serves a different safety or legal purpose. Routine protection and incident evidence should not be treated as the same thing.</p></div><div class="privacyGrid"><article class="privacyColumn"><h3>The active event may need</h3><ul><li><i data-lucide="check"></i><span>current protection state</span></li><li><i data-lucide="check"></i><span>journey or countdown context</span></li><li><i data-lucide="check"></i><span>chosen Trusted Circle</span></li><li><i data-lucide="check"></i><span>location while required by that protected event</span></li><li><i data-lucide="check"></i><span>incident information when escalation happens</span></li></ul></article><article class="privacyColumn no"><h3>WITH. should not become</h3><ul><li><i data-lucide="x"></i><span>a permanent location-history service</span></li><li><i data-lucide="x"></i><span>secret partner tracking</span></li><li><i data-lucide="x"></i><span>a public map of nearby women</span></li><li><i data-lucide="x"></i><span>a market for individual movement histories</span></li><li><i data-lucide="x"></i><span>an AI system claiming to predict an assault</span></li></ul></article></div></div></section>
<section class="storyBand"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="unlink"></i> Separate systems</span><h2>Launch data and safety data should not live in the same environment.</h2></div><p>The public website currently collects launch and partnership interest. Future live protection data belongs in a dedicated production safety environment with stricter access, audit and retention rules.</p></div><div class="dataLanes"><article class="dataLane"><div class="ey">Launch website</div><h3>Contact and partnership interest</h3><p>Names, contact details, role and voluntary messages support launch communication.</p></article><div class="dataBarrier"><i><span data-lucide="unlink"></span></i><span>Separate</span></div><article class="dataLane safety"><div class="ey" style="color:var(--lime)">Production safety</div><h3>Active protection and incidents</h3><p>Location, incident and Trusted Circle data require dedicated safety controls and explicit retention rules.</p></article></div></div></section>
<section class="storyBand soft"><div class="wrap"><div class="storyIntro"><div><span class="visualLabel"><i data-lucide="bot"></i> AI boundary</span><h2>AI can explain WITH. It should not pretend to know that violence is happening.</h2></div><p>Ask WITH. can explain features, privacy choices and safety planning. It should not diagnose abuse, predict an assault, determine guilt or replace emergency services.</p></div><div class="actions"><a class="btn" href="/privacy">Read the Privacy Notice</a></div></div></section>`;
}

function pageCopy(html: string, page: string) {
  if (page === 'organisations') return replaceMain(html, organisationsMain());
  if (page === 'trust') return replaceMain(html, trustMain());
  if (page === 'home') return homeCopy(html);
  if (page === 'mission') return missionCopy(html);
  if (page === 'how' || page === 'how-it-works') return howCopy(html);
  if (page === 'assistance' || page === 'assistance-points') return assistanceCopy(html);
  if (page === 'join') return joinCopy(html);
  return html;
}

export default async function handler(req: Request) {
  const page = new URL(req.url).searchParams.get('page') || 'home';
  const baseResponse = siteHandler(req);
  let html = await baseResponse.text();
  html = pageCopy(html, page);
  html = globalCopy(html);
  return new Response(html, {
    status: baseResponse.status,
    headers: baseResponse.headers,
  });
}
