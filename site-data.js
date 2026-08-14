/*
  Edit this file to update the GitHub Pages version.
  Put six successful MP4s and three failure MP4s in videos/.
  Replace the sample scene names, titles, observations, or filenames as needed.
*/

window.I2R_AD_SITE = {
  successCases: [
    { scene: "Success 01 · Lane Following", title: "Stable Urban Driving", src: "./videos/success-01.mp4", caption: "The policy maintains centered lane tracking and a stable speed throughout the segment." },
    { scene: "Success 02 · Intersection", title: "Controlled Intersection Crossing", src: "./videos/success-02.mp4", caption: "The policy yields to conflicting traffic and resumes smoothly once the path is clear." },
    { scene: "Success 03 · Turning", title: "Unprotected Left Turn", src: "./videos/success-03.mp4", caption: "The maneuver is completed without leaving the drivable area or creating a collision risk." },
    { scene: "Success 04 · Lane Change", title: "Responsive Lane Change", src: "./videos/success-04.mp4", caption: "The agent changes lanes with a smooth trajectory and adequate clearance to nearby vehicles." },
    { scene: "Success 05 · Roundabout", title: "Roundabout Negotiation", src: "./videos/success-05.mp4", caption: "The policy preserves right-of-way behavior while maintaining a continuous driving trajectory." },
    { scene: "Success 06 · Obstacle Avoidance", title: "Safe Obstacle Bypass", src: "./videos/success-06.mp4", caption: "The agent avoids the obstacle and returns to the target lane without visible oscillation." }
  ],
  failureCases: [
    { scene: "Failure 01 · Dense Merge", title: "Late Response to Merging Traffic", src: "./videos/failure-01.mp4", caption: "The policy reacts late to the merging vehicle, leaving insufficient clearance for safe progress." },
    { scene: "Failure 02 · Narrow Turn", title: "Over-aggressive Steering Recovery", src: "./videos/failure-02.mp4", caption: "Steering correction near the turn apex is too aggressive and causes a drivable-area violation." },
    { scene: "Failure 03 · Partial Occlusion", title: "Insufficient Anticipatory Braking", src: "./videos/failure-03.mp4", caption: "The policy does not reduce speed early enough when the relevant road user is partially occluded." }
  ]
};
