/**
 * ============================================================================
 *  TREASURE HUNT — EDIT YOUR CONTENT HERE
 * ============================================================================
 *
 *  This is the ONLY file you need to edit to personalise the website.
 *  Change the text inside the quotes, save the file, and the site updates
 *  automatically. Keep the colons, commas, and quotes in place.
 *
 *  Example — change the college name:
 *      collegeName: "Your College Name",
 *
 * ============================================================================
 */

export const eventConfig = {
  /** Your college name — shown large at the very top of the page. */
  collegeName: "TJS Engineering College",

  /** A short version of the college name — used in the floating top bar. */
  collegeShortName: "TJSEC",

  /** The name of your symposium / technical fest. */
  symposium: "National Technical Symposium",

  /** Event year. */
  year: "2026",

  /** Department organising the hunt — shown in the footer. */
  department: "Department of information technology",

  /** One-line tagline shown under the TREASURE HUNT badge. */
  tagline:
    "Follow the clues, uncover the spots, and bring home the prize.",

  /** Small fact chips under the tagline. Add, edit, or remove freely. */
  facts: ["Campus-wide", "Teams of 3"],
};

/**
 * ----------------------------------------------------------------------------
 *  QUESTIONS & HINTS
 * ----------------------------------------------------------------------------
 *
 *  Every question has its OWN hint. The hint stays hidden until a
 *  participant taps the (i) icon on that question's card.
 *
 *  - To ADD a question: copy one block (from { to }) and paste it below
 *    with the next id number.
 *  - To REMOVE a question: delete its whole block.
 *  - id must be a unique number for every question.
 *
 * ----------------------------------------------------------------------------
 */
export interface TreasureQuestion {
  id: number;
  question: string;
  hint: string;
}

export const questions: TreasureQuestion[] = [
  {
    id: 1,
    question:
      "I am a place where silence is the rule,But thousands of stories are waiting to be heard.Knowledge is everywhere around me.What place am I?",
    hint: "Ground floor",
  },
  {
    id: 2,
    question: "I sleep quietly on the wall,But when danger comes, I wake up fast.Find me where fire meets its enemy?",
    hint: "First floor",
  },
  {
    id: 3,
    question:
      "I can turn one page into many,Students visit me before assignments and exams.I copy what you give me,But I never write it myself?",
    hint: "First floor",
  },
  {
    id: 4,
    question: "I am the first place many visitors see,And the place where questions find their answers.If you need information or guidance,This is where you should go?",
    hint: "Go and search the table at that place",
  },
  {
    id: 5,
    question:
      "I hold what everyone needs,But I am not a bottle.I stay high above the ground,Keeping water ready for the whole campus.What am I?",
    hint: "it contains H2O",
  },
  {
    id: 6,
    question: "Look for the room where a single voice can capture the attention of many.It is built for ideas, discussions and presentations?",
    hint: "Where the presentation will happen.",
  },
  {
    id: 7,
    question: "Many eyes watch,Many voices are heard,And bright lights fill the room.Find the place where events and performances come alive?",
    hint: "Sometimes the cultural events,where done here.",
  },
  {
    id: 8,
    question: "Before you meet the teacher in a classroom,Before you take your seat,You must first pass through me?",
    hint: `Entrance of the room,to find the room number solve this:
🔺 First digit: the number of sides on a triangle.
🌍 Second digit: the number of moons Earth has.
✋ Third digit: the number of fingers on one hand.`,
  },
  {
    id: 9,
    question: "I never speak, but I always have something to say.News, events and announcements appear on me.Students stop and look at me every day.What am I?",
    hint: "It's on the walls of the second floor.",
  },
  {
    id: 10,
    question: "Not every path is meant for crowds.Somewhere in this building,a quiet set of steps waits unseen.Find the staircase rarely used?",
    hint: "Near to 309",
  },
  {
    id: 11,
    question: "Exams begin here,But your exam is not today.Look around the placeWhere exam work is handled?",
    hint: "Cell",
  },
  {
    id: 12,
    question: "Your next clue is not far away.Go back to the room wherethe hunt began?",
    hint: "No clue needed,run back to the place fast!",
  },
];
