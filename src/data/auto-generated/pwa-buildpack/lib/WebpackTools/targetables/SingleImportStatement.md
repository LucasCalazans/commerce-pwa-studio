<a name="SingleImportStatement" id="SingleImportStatement"></a>

## SingleImportStatement

Represents a static import statement in an ES module. SingleImportStatemnts
are used inside TargetableESModule methods to keep track of the new
dependencies being added to the module, and to resolve conflicts when they
occur.

The typical way to add new imports to a TargetableESModule is to pass a
static import statement. The import statement can accomplish two things:

- It's already a familiar syntax
- It contains the module path, the exports of the module to import, and the local binding names for those imports

That's _almost_ all we need to do the import management we need, including
deduping and scope conflict resolution.

**Kind**: global class

- [SingleImportStatement](#SingleImportStatement)
  - [new SingleImportStatement(statement)](#new_SingleImportStatement_new)
  - [.changeBinding(newBinding)](#SingleImportStatement+changeBinding) ⇒ [`SingleImportStatement`](#SingleImportStatement)
  - [.toString()](#SingleImportStatement+toString) ⇒

<a name="new_SingleImportStatement_new" id="new_SingleImportStatement_new"></a>

### new SingleImportStatement(statement)

| Param     | Type     | Description               |
| --------- | -------- | ------------------------- |
| statement | `string` | A static import statement |

<a name="SingleImportStatement+changeBinding" id="SingleImportStatement+changeBinding"></a>

### singleImportStatement.changeBinding(newBinding) ⇒ [`SingleImportStatement`](#SingleImportStatement)

Creates a new SingleImportStatement object with a different binding.

**Kind**: instance method of [`SingleImportStatement`](#SingleImportStatement)  
**Returns**: [`SingleImportStatement`](#SingleImportStatement) - A new SingleImportStatement that is a copy
of this one, but with the binding renamed. The `originalStatement` and
`statement` properties are rewritten to use the new binding.

| Param      | Type     | Description        |
| ---------- | -------- | ------------------ |
| newBinding | `string` | Binding to rename. |

<a name="SingleImportStatement+toString" id="SingleImportStatement+toString"></a>

### singleImportStatement.toString() ⇒

When interpolated as a string, a SingleImportStatement becomes the value
of its `binding` property.

**Kind**: instance method of [`SingleImportStatement`](#SingleImportStatement)  
**Returns**: string

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/SingleImportStatement.js).