# Digital Production Arts
#### DPA 8070 3D Modeling and Animation with Jim Sidletsky
#### By: Benjamin B. Warner

[Back to the main page](https://benwarnerdigitalarts.github.io/3Dworks/)

## Exercise 5: NURBS Lamp modeling
### Date: September 21st, 2020

### Objective:
Model a lamp based off a single image and only use NURBS.

### Solution:
#### The first step of my approach is to crop out the whites of the image (using GIMP, but that's hardly important). Then I draw a NURBs line to hug the profile of the lamp, making sure to keep the start and end point at the central line in prepartion for a rotation. I was sure to pay attention to the base of the lamp and drew the line in a way to account for the effect of perspective in the original reference.

![Draw a line](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/nurbsLamp/images/lineDrawWithDetails.PNG)

#### The next step is to do a revolution, but beware the normals! To correct the orientation of those dastardly normals, one could simply reverse the direction of the line.  The result is seen below.  Now it may be noticed that the base is circular. What do now?

![Revolve and Flip](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/nurbsLamp/images/revolveAndFlip.PNG)

#### The final step is to wrestle those daggum control vertices. I grabbed 'em by the corners and pulled 'em out to make a square. In a final attempt for increasing realism, I added a nice little spot light to make it look more lampy.

![Draw a line](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/nurbsLamp/images/manipulatedCornersAndLight.PNG)


