/*
  Edit this file to update the GitHub Pages version.
  Put ten successful MP4s, four failure MP4s, and four representation
  fine-tuning comparison MP4s in videos/.
  Replace the scene names, titles, observations, or filenames as needed.
*/

window.I2R_AD_SITE = {
  successCases: [
    {
      scene: "Success 01 · Emergency Brake",
      title: "Pedestrian Collision Avoidance",
      src: "./videos/success-01.mp4",
      caption: "The policy detects the crossing pedestrian and slows down promptly to avoid a collision."
    },
    {
      scene: "Success 02 · Emergency Brake",
      title: "Safe Pedestrian Interaction",
      src: "./videos/success-02-v2.mp4",
      caption: "The policy proactively slows down at the intersection and safely yields to the crossing pedestrian."
    },
    {
      scene: "Success 03 · Merging",
      title: "Highway Exit Maneuver",
      src: "./videos/success-03.mp4",
      caption: "The policy performs a smooth lane change to enter the exit lane while maintaining stable motion."
    },
    {
      scene: "Success 04 · Merging",
      title: "Highway Lane Change",
      src: "./videos/success-04.mp4",
      caption: "The policy executes a smooth lane change and successfully merges into the exit lane."
    },
    {
      scene: "Success 05 · Overtaking",
      title: "Construction Obstacle Avoidance",
      src: "./videos/success-05.mp4",
      caption: "The policy performs a smooth detour around the construction area while maintaining safe and stable motion."
    },
    {
      scene: "Success 06 · Overtaking",
      title: "Cyclist Bypass",
      src: "./videos/success-06.mp4",
      caption: "The policy safely bypasses the slow-moving cyclist and smoothly returns to the target lane."
    },
    {
      scene: "Success 07 · Overtaking",
      title: "Disabled Vehicle Bypass",
      src: "./videos/success-07.mp4",
      caption: "The policy changes lanes smoothly to bypass the stopped vehicle and continues safely along the route."
    },
    {
      scene: "Success 08 · Overtaking",
      title: "Door Opening Avoidance",
      src: "./videos/success-08.mp4",
      caption: "The policy reduces speed and safely avoids the opening vehicle door near the roadside."
    },
    {
      scene: "Success 09 · Overtaking",
      title: "Parked Vehicle Bypass",
      src: "./videos/success-09.mp4",
      caption: "The policy smoothly changes lanes to bypass the parked vehicle and safely continues along the route."
    },
    {
      scene: "Success 10 · Overtaking",
      title: "Narrow Road Obstacle Bypass",
      src: "./videos/success-10.mp4",
      caption: "The policy safely bypasses the illegally parked vehicle on a narrow road while maintaining adequate clearance."
    }
  ],

  failureCases: [
    {
      scene: "Failure 01 · Give Way",
      title: "Opposing Traffic Yield Failure",
      src: "./videos/failure-01.mp4",
      caption: "The policy fails to yield to opposing traffic while bypassing roadside traffic cones, leading to an unsafe interaction."
    },
    {
      scene: "Failure 02 · Give Way",
      title: "Unsafe Emergency Yielding",
      src: "./videos/failure-02.mp4",
      caption: "The policy performs an unsafe lane change while yielding to the emergency vehicle, causing the ego vehicle to leave the drivable lane."
    },
    {
      scene: "Failure 03 · Traffic Sign",
      title: "Insufficient Turning Clearance",
      src: "./videos/failure-03.mp4",
      caption: "The policy fails to maintain sufficient clearance during the right turn, resulting in a collision with a roadside lamp post."
    },
    {
      scene: "Failure 04 · Traffic Sign",
      title: "Poor Turning Clearance",
      src: "./videos/failure-04.mp4",
      caption: "The policy fails to maintain sufficient clearance during the left turn, resulting in a collision with a roadside traffic sign."
    }
  ],

  representationCases: [
    {
      scene: "Comparison 01 · Frozen Representation",
      title: "Scenario 1: Frozen Representation",
      src: "./videos/representation-01.mp4",
      caption: "Driving behavior when the transferred representation modules are frozen during RL training."
    },
    {
      scene: "Comparison 02 · Fine-tuned Representation",
      title: "Scenario 1: Fine-tuned Representation",
      src: "./videos/representation-02.mp4",
      caption: "Driving behavior when the transferred representation modules are fine-tuned during RL training."
    },
    {
      scene: "Comparison 03 · Frozen Representation",
      title: "Scenario 2: Frozen Representation",
      src: "./videos/representation-03.mp4",
      caption: "Driving behavior when the transferred representation modules are frozen during RL training."
    },
    {
      scene: "Comparison 04 · Fine-tuned Representation",
      title: "Scenario 2: Fine-tuned Representation",
      src: "./videos/representation-04.mp4",
      caption: "Driving behavior when the transferred representation modules are fine-tuned during RL training."
    }
  ]
};
