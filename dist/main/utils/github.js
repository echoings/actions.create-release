"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCommitData = exports.getCommits = void 0;
const github = __importStar(require("@actions/github"));
const log_1 = require("./log");
async function getCommits() {
    let commits;
    const context = github.context;
    log_1.info("Getting commits...");
    switch (context.eventName) {
        case "push":
            commits = context.payload.commits;
            break;
        default:
            log_1.info('You are using this action on an event for which it has not been tested. Only the "push" events are supported.');
            commits = [];
            break;
    }
    log_1.info(commits);
    return commits;
}
exports.getCommits = getCommits;
function fetchCommitData(commit) {
    const context = github.context;
    const repo = context.payload.repository;
    const owner = repo === null || repo === void 0 ? void 0 : repo.owner;
    const { GITHUB_TOCKEN = '' } = process.env;
    const gh = github.getOctokit(GITHUB_TOCKEN);
    const args = { owner: (owner === null || owner === void 0 ? void 0 : owner.name) || (owner === null || owner === void 0 ? void 0 : owner.login), repo: repo === null || repo === void 0 ? void 0 : repo.name, ref: '' };
    args.ref = commit.id || commit.sha;
    log_1.debug("Calling gh.repos.getCommit() with args", args);
    return gh.repos.getCommit(args);
}
exports.fetchCommitData = fetchCommitData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQTBDO0FBQzFDLCtCQUFvQztBQUVwQyxLQUFLLFVBQVUsVUFBVTtJQUN2QixJQUFJLE9BQU8sQ0FBQztJQUNaLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFFL0IsVUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFM0IsUUFBUSxPQUFPLENBQUMsU0FBUyxFQUFFO1FBQ3pCLEtBQUssTUFBTTtZQUNULE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxNQUFNO1FBQ1I7WUFDRSxVQUFJLENBQ0YsK0dBQStHLENBQ2hILENBQUM7WUFDRixPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsTUFBTTtLQUNUO0lBRUQsVUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQW9CQyxnQ0FBVTtBQWxCWixTQUFTLGVBQWUsQ0FBQyxNQUFXO0lBQ2xDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDL0IsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEtBQUssQ0FBQztJQUMxQixNQUFNLEVBQUUsYUFBYSxHQUFHLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFFM0MsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU1QyxNQUFNLElBQUksR0FBUSxFQUFFLEtBQUssRUFBRSxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLE1BQUksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssQ0FBQSxFQUFFLElBQUksRUFBRSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUVwRixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUVuQyxXQUFLLENBQUMsd0NBQXdDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBSUMsMENBQWUifQ==