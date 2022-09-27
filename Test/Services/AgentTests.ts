import { AgentService } from "../../Services/implementation/AgentService";
import { expect } from "chai";
import "mocha";

let agentService = new AgentService();
describe("Agent Service", () => {
  it("Should return agent", async () => {
    let agent = await agentService.Get(1);
    expect(agent?.id).to.equal(1);
  });
});