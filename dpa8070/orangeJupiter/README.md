# Digital Production Arts
#### DPA 8070 3D Modeling and Animation with Jim Sidletsky
#### By: Benjamin B. Warner

[Back to the main page](https://benwarnerdigitalarts.github.io/3Dworks/)

## Exercise 9: Shading and Lighting - an Orange and Jupiter
### Date: October 7th, 2020

### Objective:
Create realistic shading and lighting for basic models (spheres) of an orange and Jupiter.

### Solution:
#### I found a similar solution for both scenarios, primarily making use of basic Blinn shaders with colors driven by ramps.

![side by side](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/orangeJupiter/images/orangeAndJupiter-noDome.JPG)

#### Additionally, here is a view with the dome light activated to better emphasize the overall color and shape of the objects. Obviously, Jupiter should have barely any surface displacements, but I included some very slight changes to emulate the effect of thick wispy clouds covering the surface.

![dome on](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/orangeJupiter/images/orangeAndJupiter-withDome.JPG)

#### To create the ilusion of a natural orange texture, the ramp includes a variety of light and dark orange colors mimicing natural discolorations. The Blinn shader has some low reflections to come closer to reality, then "billow" noise creates the surface pores. The noise is tweaked until the desired affect is achieved, then the displacement scale is actually set to -0.03 to create indents on the surface instead of bumps.

![orange shader](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/orangeJupiter/images/orangeShader.JPG)

#### Here you can see the resulting ramp and an upclose shot of the orange pores.

![orange details](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/orangeJupiter/images/orangeRampAndDetails.JPG)

#### Similarly, Jupiter was made by applying a ramp that includs each of the "bands" going around the planet. In the ramp attributes, "Noise" was slightly increased to create wavier layers.  Finally, a "wispy" noise is used to mix some blue into the color output and then gives that output to a Blinn shader.  Reflectivity is very small for Jupiter, due to a lack of surface waters.

![jupiter shader](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/orangeJupiter/images/jupiterShader.JPG)

![jupiter details](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/orangeJupiter/images/jupiterRampAndDetails.JPG)