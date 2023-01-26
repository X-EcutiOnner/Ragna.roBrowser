/**
 * Preferences/ShortCutControls.js
 *
 * ShortCut preferences
 *
 * This file is part of ROBrowser, (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(["Core/Preferences",	"Controls/KeyEventHandler"],	function (Preferences,	KEYS) {

	var ShortCuts = {};
	ShortCuts.F1_1 =			{	init:{key: KEYS.F1,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE0'				};
	ShortCuts.F1_2 =			{	init:{key: KEYS.F2,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE1'				};
	ShortCuts.F1_3 =			{	init:{key: KEYS.F3,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE2'				};
	ShortCuts.F1_4 =			{	init:{key: KEYS.F4,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE3'				};
	ShortCuts.F1_5 =			{	init:{key: KEYS.F5,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE4'				};
	ShortCuts.F1_6 =			{	init:{key: KEYS.F6,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE5'				};
	ShortCuts.F1_7 =			{	init:{key: KEYS.F7,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE6'				};
	ShortCuts.F1_8 =			{	init:{key: KEYS.F8,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE7'				};
	ShortCuts.F1_9 =			{	init:{key: KEYS.F9,		alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE8'				};
	ShortCuts.F2_1 =			{	init:{key: KEYS[1],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE9'				};
	ShortCuts.F2_2 =			{	init:{key: KEYS[2],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE10'				};
	ShortCuts.F2_3 =			{	init:{key: KEYS[3],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE11'				};
	ShortCuts.F2_4 =			{	init:{key: KEYS[4],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE12'				};
	ShortCuts.F2_5 =			{	init:{key: KEYS[5],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE13'				};
	ShortCuts.F2_6 =			{	init:{key: KEYS[6],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE14'				};
	ShortCuts.F2_7 =			{	init:{key: KEYS[7],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE15'				};
	ShortCuts.F2_8 =			{	init:{key: KEYS[8],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE16'				};
	ShortCuts.F2_9 =			{	init:{key: KEYS[9],		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE17'				};
	ShortCuts.F3_1 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE18'				};
	ShortCuts.F3_2 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE19'				};
	ShortCuts.F3_3 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE20'				};
	ShortCuts.F3_4 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE21'				};
	ShortCuts.F3_5 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE22'				};
	ShortCuts.F3_6 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE23'				};
	ShortCuts.F3_7 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE24'				};
	ShortCuts.F3_8 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE25'				};
	ShortCuts.F3_9 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE26'				};
	ShortCuts.F4_1 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE27'				};
	ShortCuts.F4_2 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE28'				};
	ShortCuts.F4_3 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE29'				};
	ShortCuts.F4_4 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE30'				};
	ShortCuts.F4_5 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE31'				};
	ShortCuts.F4_6 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE32'				};
	ShortCuts.F4_7 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE33'				};
	ShortCuts.F4_8 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE34'				};
	ShortCuts.F4_9 =			{	init:{key: "",			alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXECUTE35'				};
	ShortCuts.ChatRoom =		{	init:{key: KEYS.C,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ChatRoomCreate',		cmd:'TOGGLE'				};
	ShortCuts.Inventory =		{	init:{key: KEYS.E,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'Inventory',			cmd:'TOGGLE'				};
	ShortCuts.PushCart =		{	init:{key: KEYS.W,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'CartItems',			cmd:'TOGGLE'				};
	ShortCuts.Guild =			{	init:{key: KEYS.G,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'Guild',				cmd:'TOGGLE'				};
	ShortCuts.PetInfo =			{	init:{key: KEYS.J,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'PetInformations',	cmd:'TOGGLE'				};
	ShortCuts.Emotions =		{	init:{key: KEYS.L,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'Emoticons',			cmd:'TOGGLE'				};
	ShortCuts.WorldMap =		{	init:{key: KEYS.M,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'WorldMap',			cmd:'TOGGLE'				};
	ShortCuts.WinStats =		{	init:{key: KEYS.A,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'Equipment',			cmd:'TOGGLE'				};
	ShortCuts.Equipment =		{	init:{key: KEYS.Q,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'ShortCuts',			cmd:'TOGGLE'				};
	ShortCuts.SkillList =		{	init:{key: KEYS.S,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'SkillList',			cmd:'TOGGLE'				};
	ShortCuts.BasicInfo =		{	init:{key: KEYS.V,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'BasicInfo',			cmd:'EXTEND'				};
	ShortCuts.Friends =			{	init:{key: KEYS.H,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'PartyFriends',		cmd:'FRIEND'				};
	ShortCuts.Party =			{	init:{key: KEYS.Z,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'PartyFriends',		cmd:'PARTY'					};
	ShortCuts.HomunInfo =		{	init:{key: KEYS.R,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'HomunInformations',	cmd:'TOGGLE'				};
	ShortCuts.HomunState =		{	init:{key: KEYS.T,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'HomunInformations',	cmd:'TOGGLE'				};
	ShortCuts.Quest =			{	init:{key: KEYS.U,		alt: true,	ctrl: false,	shift: false},	cust: false,	component:'HomunInformations',	cmd:'AGGRESSIVE'			};
	//ShortCuts.Sit =			{	init:{key: KEYS.INSERT,	alt: false,	ctrl: false,	shift: false},	cust: false,	component:'xxx',				cmd:'xxx'					};//TODO
	ShortCuts.ChatSize =		{	init:{key: KEYS.F10,	alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ChatBox', 			cmd:'updateHeight'			};
	ShortCuts.SkillBarSize =	{	init:{key: KEYS.F12,	alt: false,	ctrl: false,	shift: false},	cust: false,	component:'ShortCut',			cmd:'EXTEND'				};
			
	//Custom		
	ShortCuts.M_UI =			{	init:{key: KEYS[9],		alt: false,	ctrl: true,		shift: false},	cust: false,	component:'MobileUI',			cmd:'SHOW'					};
	ShortCuts.M_Toggle =		{	init:{key: KEYS[8],		alt: false,	ctrl: true,		shift: false},	cust: false,	component:'MobileUI',			cmd:'TOGGLE'				};
	ShortCuts.M_Targeting =		{	init:{key: KEYS[2],		alt: false,	ctrl: true,		shift: false},	cust: false,	component:'MobileUI',			cmd:'TG'					};
	ShortCuts.M_AutoTarget =	{	init:{key: KEYS[3],		alt: false,	ctrl: true,		shift: false},	cust: false,	component:'MobileUI',			cmd:'AT'					};
	ShortCuts.M_Attack =		{	init:{key: KEYS[1],		alt: false,	ctrl: true,		shift: false},	cust: false,	component:'MobileUI',			cmd:'ATK'					};
	
	var ShortCutControls = { ShortCuts: ShortCuts };
	
	return Preferences.get("ShortCutControls",	ShortCutControls, 1.0);
});
