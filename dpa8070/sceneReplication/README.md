# Digital Production Arts
#### DPA 8070 3D Modeling and Animation with Jim Sidletsky
#### By: Benjamin B. Warner

[Back to the main page](https://benwarnerdigitalarts.github.io/3Dworks/)

[Download this scene!](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/sceneReplication/sceneReplication.zip)

## Project 2: Replicate a Scene
### Date: October 21st, 2020

### Objective:
#### Replicate a picture as accurately as you can, creating the models, shaders, textures, and lighting.

### Solution:
####  For this task, I thought it might be interesting to make a bookshelf, but then I realized that would be too intricate to model every individual shelf and piece on the entire unit.  I narrowed my focus to just one shelf and picked fewer items to be realistic about my goals. This provided me with a good balance of intricate and simple models and shaders, then also gave me an interesting opportunity to experiment with UVs and textures.

![second and third](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/sceneReplication/images/secondAndThird.PNG)

#### Here you can see another view of everything. In particular, the last shot allows you to see King Kittan pondering on the deeper complexities of organic life. Though he is inanimate, we can assume the question pops up: "What is my purpose?" If he were a functional robot, I would likely program him to pass the butter.

![fourth and ponder](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/sceneReplication/images/fourthAndPonder.PNG)

#### The most complicated model is actually the bookshelf (other than the King Kittan figure imported from past projects).  Otherwise, the biggest task was to logically implement the books in a way that looked real.  The best way to do this proved to be using relatively simple models combined with UVs that were contructed using GIMP and photos.  These UVs were made by starting with a Blinn shader to enable reflectance adjustment and controlling color with a file. Most of the books are relatively basic, but this "Life" book/boardgame and Norse mythology book are more complex in their models and the files themselves are more interesting as well.  The rubiks cube is similar to the books, but has a unique pattern on each side and features some indents between each sub-cube.

![quality pieces](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/sceneReplication/images/qualityAndShaders.PNG)

#### King Kittan was essentially just dropped in, then scaled to match the scene. The plant was an usual piece that made use of some basic geometries and also mix shaders controlled by noise for the natural patterns.  The jar features some interesting geometries and a aiStandardShader with transparency turned up to mimic glass.  The soil, in addition to a noisy shader, has displacement driven by the same noise to make it look more like soil.

![plant and shaders](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/sceneReplication/images/plantAndShaders.PNG)

#### There are 2 wood textures in this assembly, the shelf and the wooden box. Both were achieved with mix shaders controlled by noise, but the shelf used Perlin noise and the box used wispy noise. This exploded view allows you to more easily appreciate all of the components of this scene and better see these wood shaders.

![exploded and wood](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/sceneReplication/images/explodedAndWoodShaders.PNG)

#### When it's all stripped away, the scene is still pretty interesting but you can see how much the shaders really contribute to the finished product. Also, in this stripped view you can see the main directional light (upper right) that creates the shadows to come closer to reality. Additionally, there is an Arnold skydome light that fills the rest of the lighting.

#### And just look at that cube again! I am surprised at how real it looks considering the simplicity, but I think I like this piece the most.

![stripped and cube](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/sceneReplication/images/strippedAndCube.PNG)

