# Another todo list app

A todo app in React and Redux. Usable on the web and mobile responsive.

## How to run the app

1. Clone the repository
2. Install all dependencies using Yarn or NPM
3. Run yarn dev or npm dev to create a live development server that will run the code at a certain
   localhost link

## How to use the app

1. Enter your name and choose a password if you'd like to have the ability to lock your notes
2. Click submit and be redirected to the dashboard
3. Write in todo tasks in the input box and press the button to add them to the list
4. Press the square button to toggle whether a task has been completed or not
5. If you'd like to delete a to-do, press on the trashcan icon button and they'll be removed
6. If you'd like to logout, click on the logout button on the navbar
7. If you'd like to change your name or the theme, open the settings modal using the settings button
   on the navbar

## Specifications

-   [x] The app will be in a github repository with commit history and a README.md that shows how to
        use the app.
-   [x] The app has two main pages, ‘signin’ and ‘dashboard’.
-   [x] The user must be directed and/or redirected to the signin page until they submit a 4+
        character name
-   [x] If the user signs out they are redirected to the signin page. The dashboard:
-   [x] Layout: nav, input area and a sidebar.
-   [x] Mobile responsive
-   [x] On small screens the Nav stays where it is.
-   [x] The ‘add todo’ section is directly under the nav, and must always be present
-   [x] The ‘sidebar’ will be pushed under the ‘add-todo’ and the user will be able to scroll
        through their todos if there’s too many to fit on the screen

Nav menu:

-   [x] Logout: clear name and redirect to login.
-   [x] Settings: A modal that allows the user to change their name and theme.

Sidebar:

-   [x] The sidebar shows todos the user has added
-   [x] The selector at the top allows the user to view todos that have been ‘completed’, or still
        todo, or all todos.
-   [x] Completed todos should be shown in the order they were completed
-   [ ] Todos ‘to-be-completed’ should be shown in reverse order they were added, (i.e, oldest
        first, newest last)
-   [x] All todos should be shown in the order they were added (newest first, oldest last)

Todo:

-   [x] The ‘todo’ items in the side bar will have an obvious way to mark the todo as ‘completed’.
-   [x] User’s should (somehow) be able to delete/remove todos
-   [ ] Only completed tasks should be able to be deleted
-   [x] ‘completed’ todos will visually look different from ‘non-completed’ todos

Settings Modal:

-   [x] User should be able to change their name and theme.
-   [x] The user should have at least one other theme option to select from.
-   [x] The modal will open in front of the app with a semi-transparent background.

Technical Requirements

-   [x] Use react-router to route app between ‘/signin’, ‘/dashboard’
-   [ ] Setup ‘/dashboard/settings’ modal link (optional).
-   [x] Use react-redux to store app state. The app state should include the following state: {
        todos: Array of Objects, theme: String, name: String, }
-   [x] Use the existence of a valid name and user password to conditionally route the user to
        /signin or /dashboard.
-   [x] Render/change some obvious part(s) of the dashboard according to the user’s theme setting if
        set, and otherwise some default theme.
-   [x] Clicking outside the settings modal closes the modal.
-   [ ] Preferably use create-react-app to create the app
-   [x] Use only the following non- dev packages react, react-dom, react-router, redux, react-redux,
        axios or fetch.

Stretch Goals :D

-   [x] Make the app look nicer than the design I was given
-   [x] Have the app save the state of user’s name/password and their todos across browser refreshes
        and visits.
-   [ ] Have different todos based on the user

| Incomplete spec                                   | Why didn't you complete this?                                                                                                                                                                                | Is the app better without it? In what way?                                                                                                                                                                                                             | How would you implement it?                                                                                                                                                                                                                                                                                                                                                                                           |     |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Setup ‘/dashboard/settings’ modal link (optional) | Being an optional specification, the benefits of implementing this feature is not worth the time I would need to spend to do so.                                                                             | I don't think adding the feature would make a positive or negative change to the app                                                                                                                                                                   | Instead of using state to manage modals, I'd create duplicate pages for whether a certain modal is open or not. I'd create React Router route pages where if the current link is /dashboard/:modal, It would show the modal page and if the user clicks on the transparent part of the screen, it would link to the parent page and to open it, you'd be redirecting to a link instead of a button that mutates state |     |
| Preferably use create-react-app to create the app | I prefer to use Vite                                                                                                                                                                                         | Yes. Allows for a better development experience which in turn results in higher quality code being written.                                                                                                                                            | Change my dev dependencies to react-scripts                                                                                                                                                                                                                                                                                                                                                                           |     |
| Have different todos based on the user            | It's a "stretch goal" and whilst I could implement it, it would take a while and I'm pretty happy with what I've completed so far and I'd like to receive feedback before implementing any more new features | Yes and no. If implemented, it would mean that the user would need to enter in both the correct name AND password whereas currently you only need to enter the current password and the user is able to enter any (4 character or more) name they want | I'd modify my redux store to allow for multiple names to be added and create an author param in my todo array                                                                                                                                                                                                                                                                                                         |     |
