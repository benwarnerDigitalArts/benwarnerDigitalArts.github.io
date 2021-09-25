# Digital Production Arts
#### DPA 8070 3D Modeling and Animation with Jim Sidletsky
#### By: Benjamin B. Warner

[Back to the main page](https://benwarnerdigitalarts.github.io/3Dworks/)

## Project 3: Bringing a unicycle to life
### Date: November 11th, 2020

<video src="https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/unicycleAnimation/render/unicycleVid1.mp4" width="800" height="600" controls preload></video>

[Download unicycle Maya file!](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/unicycleAnimation/warner-unicycle2.mb)

### Objective:
#### Create an animation of a unicycle lasting 10-20 seconds. Create a rig to animate your unicycle. You are free to be as creative as you like with the animation. Try to make the final product entertaining. Also, incorporate some of the Disney 12 animation principles.

### Solution:
#### I chose to animate an action-packed unicycle, with an "animated" personality that exudes confidence. I wanted to give this character a semi-realistic apearance through the use of arnold shaders and give it an interesting environment to fit that.  From this, I contructed a small world with a ground plane, tree stump, and a more interesting skybox.

Here is an overview of the world unrendered compared to rendered:

![unrendered-rendered](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/unicycleAnimation/images/unrendered-rendered.PNG)

#### A few principles of animation principles were included in this short clip. Most notable were examples of anticipation, staging, overlap + follow-through, and arcs. Every jump or flip of the unicycle includes some anticipation before the jump, follow-through on the landing, and arc during the jump. Anticipation can also be seen in the "windup" before any sudden forward accelerations. An example of staging can be seen when the unicycle makes "eye" contact with the camera to call attention to the cool stunt that it is about to attempt.

![landing-anticipation-staging](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/unicycleAnimation/images/landing-anticipation-staging-ex.PNG)

Here you can see the anticipation of a jump before the backflip and the detail of the model mid-crash.

![backflip and crash](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/unicycleAnimation/images/backflip-crash.PNG)

#### Due to file size contraints, the above video is not fully capable of showing the detailed procedural textures used on each of the assets in this scene. For the unicycle seat, billow noise with reduced randomness that controls displacemet creates an interesting pattern of recessions in the seat. Similarly, wave noise is used to create an interesting and semi-realistic tire pattern. Finally, a mixture of noises is applied to the tree stump to approximate the impression of bark. The results of these shader implementations can be seen below in some focused shots below.

![texture details](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/unicycleAnimation/images/textureDetails-withSeat.PNG)

These shaders were achieved using some basic arnold functionalities as can be seen below. Additionally, the grass and sign textures can be seen as basic implementations of file driven patterns.

![shaders](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/unicycleAnimation/images/shadersDetails.PNG)



