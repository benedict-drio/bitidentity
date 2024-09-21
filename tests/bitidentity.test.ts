import { describe, it } from "vitest";
import { expect } from "chai";

const { callReadOnlyFunction, getTxResult } = require("@stacks/stacking");

describe("bitidentity.clar", () => {
  it("should create and retrieve an identity", async () => {
    const txResult = await callReadOnlyFunction("create-identity", {
      id: "test-id",
      identity: "test-identity",
    });

    expect(txResult).to.have.property("result", "Identity created");

    const identity = await callReadOnlyFunction("get-identity", {
      id: "test-id",
    });
    expect(identity).to.have.property("identity", "test-identity");
  });
});
