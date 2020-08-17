import { fileHelper } from "";

describe("file helper shoudl read text from the text file ", () => {
  const fileHelper = new fileHelper();
  const resulte = fileHelper.readStringFromFile(text-input.txt);
  const commandLines = result.split(/\n/);

  it("result should read file", () => {
    expect(result).toBe("test1\ntest2");
  });
  it("command line 1 should read test1", () => {
    expect(commandLines[0].toBe("test1"));
  });

  it ("command line 2 should read test2", ()=>{
      expect (commandLines[1].toBe('test2'));
    });
});
