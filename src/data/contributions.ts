/**
 * Open Source Contributions Data
 */

export interface Contribution {
  id: string;
  project: string;
  description: string[];
  links: {
    label: string;
    url: string;
  }[];
}

export const contributions: Contribution[] = [
  {
    id: "wikimedia-commons",
    project: "Wikimedia Commons",
    description: [
      "Improved ease of navigation between related screens by 60% by optimizing fragment navigation and implementing proper attribute passing in Java and Android Views.",
      "Fixed memory leaks and improved app performance by 20% by freeing up references to unused fragments.",
      "Improved dark mode UI by adjusting system bar colors to match the theme.",
      "Fixed Gradle build errors by 100% by upgrading obsolete dependencies.",
    ],
    links: [
      { label: "Merged PR #1", url: "https://github.com/commons-app/apps-android-commons/pull/6164" },
      { label: "Merged PR #2", url: "https://github.com/commons-app/apps-android-commons/pull/6120" },
    ],
  },
  {
    id: "lichess",
    project: "Lichess",
    description: [
      "Added getters and setters to the offline games class, extending functionality using Dart OOP.",
      "Extended a Riverpod Notifier with extra functions and added them to UI, resulting in complete offline games functionality, using Riverpod and Riverpod code gen.",
    ],
    links: [
      { label: "Merged PR", url: "https://github.com/lichess-org/mobile/pull/1571" },
    ],
  },
];
