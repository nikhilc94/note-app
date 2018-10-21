
## Folder structure

```
note-app/
  README.md
  .gitignore
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    index.js
    actions/
      filters.js
      notes.js
    components/
      AddNote.js
      Dashboard.js
      FilterNotes.js
      ListNotes.js
    reducers/
      filters.js
      notes.js
    selectors/
      filterFunction.js
    styles/
      styles.css
    tests/
      actions/
        filters.test.js
        notes.test.js
      reducers/
        filters.test.js
        notes.test.js
      selectors/
        filterFunction.test.js
```


## Functionality

The note app has the following functionality:-

- Add a note with or without color code.
- Display all the added notes.
- Search notes using text.
- Search notes using color code.
- Delete a note.



## Structure of the Redux store.

The redux store state object consists of two properties i.e. notes & filters. "notes" is a array of objects where each object contains information about a particular note. "filters" is an object which stores the current filters state of the app.

```
{
  notes: [{
    note: "Test",
    created: "Oct 19 2018, 22:20 PM",
    color: '#db3e00'
  }],
  filters: {
    text: 'es',
    color: '#db3e00'
  }
}
```