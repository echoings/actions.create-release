import * as github from '@actions/github';
import { info, debug } from './log';
async function getCommits() {
    let commits;
    const context = github.context;
    info("Getting commits...");
    switch (context.eventName) {
        case "push":
            commits = context.payload.commits;
            break;
        default:
            info('You are using this action on an event for which it has not been tested. Only the "push" events are supported.');
            commits = [];
            break;
    }
    info(commits);
    return commits;
}
function fetchCommitData(commit) {
    const context = github.context;
    const repo = context.payload.repository;
    const owner = repo?.owner;
    const { GITHUB_TOCKEN = '' } = process.env;
    const gh = github.getOctokit(GITHUB_TOCKEN);
    const args = { owner: owner?.name || owner?.login, repo: repo?.name, ref: '' };
    args.ref = commit.id || commit.sha;
    debug("Calling gh.repos.getCommit() with args", args);
    return gh.repos.getCommit(args);
}
export { getCommits, fetchCommitData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRXBDLEtBQUssVUFBVSxVQUFVO0lBQ3ZCLElBQUksT0FBTyxDQUFDO0lBQ1osTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUUzQixRQUFRLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFDekIsS0FBSyxNQUFNO1lBQ1QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xDLE1BQU07UUFDUjtZQUNFLElBQUksQ0FDRiwrR0FBK0csQ0FDaEgsQ0FBQztZQUNGLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixNQUFNO0tBQ1Q7SUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFZCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsTUFBVztJQUNsQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQy9CLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3hDLE1BQU0sS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLENBQUM7SUFDMUIsTUFBTSxFQUFFLGFBQWEsR0FBRyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBRTNDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFNUMsTUFBTSxJQUFJLEdBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUVwRixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUVuQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsT0FBTyxFQUNMLFVBQVUsRUFDVixlQUFlLEVBQ2hCLENBQUEifQ==