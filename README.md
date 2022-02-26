# `Importing all images at once from a folder in React`
For a gallery where it shows hundreds of images it is not applicable to import every image and show it. So to make it easy and import every image in a folder at once `require.context()` is used where the folder is searched for any file ending with jpg, png or svg and all images is stored as an array.
NOTE: I have named the images in the folder in a numerical way so i can iterate through the array and obtain the images.

So here when academics is selected it checks into images/academics and the whole images is selected and is stored in the array images.


