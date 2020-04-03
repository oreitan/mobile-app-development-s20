# Contacts Access Workshop

The purpose of this workshop is to "Get Your Hands Dirty"!

We'll go through, step by step on how to achieve a nice contact list on screen exactly the same as your phone book works!

## Step 1
Create a new RN app using `expo init` command.
Make sure your app is working and running before jumping to changes

## Step 2
Let's setup ESLint using [this guide](../guides/eslint.md)

## Step 3
Add search text field box. Place it on top of the screen, below the screen header

## Step 4
Add activity indicator to show the user we're on loading state until the contacts are retrieved from the device.
The loading indicator will be shown as long as the loading being done. Once loading is finished, it will not be shown anymore.

## Step 5
Use [`expo-contacts`](https://docs.expo.io/versions/v36.0.0/sdk/contacts/) to get access to the device's contacts list.

## Step 6
Use [FlatList](https://docs.expo.io/versions/v36.0.0/react-native/flatlist/) Component to render the list of contacts which were loaded in previous step.
<br>
Your list should look like:<br>
```
 ______________________________
| Contact Name                 |
|                              |
| # Mobile No.                 |
|______________________________|
| Contact Name                 |
|                              |
| # Mobile No.                 |
|______________________________|
| Contact Name                 |
|                              |
| # Mobile No.                 |
|______________________________|
```

## Step 7
Connect the search action to filter the contacts list with each key type.

## Step 8
Calculate the [Levenshtein distance]
(https://en.wikipedia.org/wiki/Levenshtein_distance)
between your name and your contacts.
Update the UI to show in each item
```
 ______________________________
| Contact Name                 |
|                              |
| # Mobile No.      L.Distance |
|______________________________|
```
