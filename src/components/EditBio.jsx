export default async function EditBioText() {
  //imagine a query getting the existing data with a brilliant "if null" error preventer to fill the defaultValue
  //and then imagine it's this component in the user page instead of rendering the bio as is
  async function handleSubmit() {
    //some brilliant code to POST to database
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name="bio">Would you like to edit your bio?</label>
        {/* <input type="textarea" name="bio" defaultValue={}/> */}
      </form>
    </div>
  );
}
