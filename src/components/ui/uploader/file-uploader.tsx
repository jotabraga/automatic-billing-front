type FileUploaderProps = {
  file: File;
};

//{ file }: FileUploaderProps
const FileUploader = () => {
  const mockedFile = { name: "filename", type: "csv", size: "3000" };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input
          id="file"
          type="file"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
        />
      </div>
      {/* {file && (
        <section>
          <p className="pb-6">File details:</p>
          <ul>
            <li>Name: {mockedFile.name}</li>
            <li>Type: {mockedFile.type}</li>
            <li>Size: {mockedFile.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button className="rounded-lg bg-green-800 text-white px-4 py-2 border-none font-semibold">
          Upload the file
        </button>
      )} */}
    </div>
  );
};

export { FileUploader };
