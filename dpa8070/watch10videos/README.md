# Digital Production Arts
#### DPA 8070 3D Modeling and Animation with Jim Sidletsky
#### By: Benjamin B. Warner

[Back to the main page](https://benwarnerdigitalarts.github.io/3Dworks/)

## Exercise 6: Watch 10 Videos
### Date: September 23rd, 2020

### Objective:
Find 10 videos covering advanced Maya techniques and write a brief summary for each one.

### Solution:
#### I chose Pluralsight's "Advanced Character Modeling in Maya" course by Joshua Brock.

[Link to Course](https://app.pluralsight.com/library/courses/advanced-char-modeling-maya-2398/table-of-contents)

#### Video 1: Setting up our project

This video details how to set up a project and project window in Maya, which creates the default folders to optimize workflow.  Next, hotkeys are set for most commonly used tools that are not set already by the Maya defaults.  These include: offset edge loop, insert edge loop, extrude, cut, and a few others.

The final step in this video is set up reference image planes for the front and side views, then clean up the perspective view by isolating those image planes to the respective views.

![workspace and hotkeys](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/watch10videos/images/workspaceAndHotkeys.PNG)

#### Video 2: Creating the base mesh for the arms

To begin, we insert a polymesh cyclinder, then reduce the divisions in prepartion for merging shapes later in the process.  Move the shape into position based on the references, then deorm it to fit roughly to the dimensions between the shoulder and the wrist.

At this point, begin adding enough edge loops around the arm to match the desired shape.  Use the move and scale tools to bring the shape closer and verify that the geometry is starting to make sense for an arm.

#### Video 3: Modeling the base mesh for the chest

Using the same principles as used for the arms, add a cylinder for the for the chest and begin deforming it to fit the refs.  Cut the chest in half to make symmetry easier down the line.  Adjust the hip lines to flow with the natural geometries and be prepared to add complexities later.

#### Video 4: Modeling the base mesh for the legs

Much like the arm and torso, add a cylinder and deform it to make one of the legs.  Add sufficient edge loops add joints to account for rigging later.

For the boot, bring the cylinder straight down to the base of the boot and then extrude some faces in the direction of the toes.  Finally, add more edge loops to bring it closer to the shape of the boot.

#### Video 5: Modeling the base mesh for the hand

Begin modeling the hand by making another cylinder, but then duplicate the cylinder to make each finger and the thumb.  Roughly position each component, then up-rez the palm until they can all be merged.

Begin by combining all of the shapes into the same object. Use "G" to repeat teh last operation!!

#### Video 6: Merging the fingers

A process for reducing the number of lines is used for the fingers.  First, extract and merge the lines at the base of each finger to the fingers next to it.  Then, extract the edge loop that is created down twice and merge edges to create diamonds between each finger.

Use the tool settings for "insert edge loops" to insert multiple edge loops that are evenly spaced.

#### Video 7: Refining Chest and Arms

Merge the the serpate components made in the previous videos by grabbing set of points and merging them when aligned, increasing or decreasing rez as needed. Use the smooth mode to identify unmerged vertices by looking for parts where a "pinching" towards the unmerged is visible.

Add edge loops to the shoulder area, then move edges below outer layer to create the impression of seperate materials.

![torso and arm](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/watch10videos/images/torsoAndArm.PNG)

#### Video 8: Refining Waist, Leg, and Boot

Add "holding edges" near creases to maintain hard lines when using the smooth option.  This is necessary wherever creases are made to give the impression of seperate pieces.

Seams on the leg are created by extruding the relevant faces "inwards", then adding edge loops near the seams. These edge loops are manipulated using the "normal" axis orientation in the move tool settings.

Select a face loop by choosing one face, then double click the next face in the direction of the loop. This is useful is making the belt and parts of the boot.

Make the boot a seperate object by "extracting" it, then bring the top edge inwards to account for any unusual rigging deformations that might create a gap, causing strange lighting effects.

![belt and boots](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/watch10videos/images/beltAndBoots.PNG)

#### Video 9: Adding finger details and merging the hand

Begin filling in the details of the hands, such as adding creases to the finger joints and then prepare to merge it with the rest of the body model.

Up rez the wrist area enough to match the number of lines in the hand, but stop the lines from spreading to the rest of the model by adding reducing diamonds.  This will keep the poly count low.

![fingers](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/watch10videos/images/handDetails.PNG)

#### Video 10: Finalizing the body mesh

Do any final adjustments to the model, then duplicate and merge the center vertices to create the finalalized body mesh. The boots will remain seperate.

![wireframe](https://benwarnerdigitalarts.github.io/3Dworks/dpa8070/watch10videos/images/overallWireframe.PNG)




