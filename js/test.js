import { FileHelper } from "../components/FileHelper.js";
import { createInstanceFromCommandLine } from "../app.js";
const line1 = "Driver Dan";
const line4 = "Trip Dan 07:15 07:45 17.3";
const driver = createInstanceFromCommandLine(line1);
const trip = createInstanceFromCommandLine(line4);

describe("file helper should read text from text file", () => {
  const fileHelper = new FileHelper();
  const result = fileHelper.readStringFromFile("test-input.txt");
  const commandLines = result.split(/\r\n/);

    it("result should be able to read text file", () => {
      expect(result).toBe("test1\r\ntest2");
    });

    it("command line 1 should read test1", () => {
      expect(commandLines[0]).toBe("test1");
    });

  it("command line 2 should read test2", () => {
    expect(commandLines[1]).toBe("test2");
  });
});

describe("create instances from command lines", () => {
  it("command should return driver instance named Dan", () => {
    expect(driver.name).toBe("Dan");
  });

  it("command should return trip instance with driver Dan", () => {
    expect(trip.driver).toBe("Dan");
  });

  it("command should return trip start time to be 07:15", () => {
    expect(trip.startTime).toBe("07:15");
  });

  it("command should return trip end time to be 07:45", () => {
    expect(trip.endTime).toBe("07:45");
  });

  it("command should return trip total miles driven to be 17.3", () => {
    expect(trip.milesDriven).toBe("17.3");
  });
});