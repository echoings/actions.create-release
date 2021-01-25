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
      info(
        'You are using this action on an event for which it has not been tested. Only the "push" events are supported.'
      );
      commits = [];
      break;
  }

  info(commits);

  return commits;
}

function fetchCommitData(commit: any) {
  const context = github.context;
  const repo = context.payload.repository;
  const owner = repo?.owner;
  const { GITHUB_TOCKEN = '' } = process.env;

  const gh = github.getOctokit(GITHUB_TOCKEN);

  const args: any = { owner: owner?.name || owner?.login, repo: repo?.name, ref: '' };

  args.ref = commit.id || commit.sha;

  debug("Calling gh.repos.getCommit() with args", args);

  return gh.repos.getCommit(args);
}

export {
  getCommits,
  fetchCommitData
}
