# Definition of Done

For any user story in the React Todo Dashboard to be considered **Done**, all of the following must be true:

- **Code written**
  - All necessary React components, hooks, utilities, and configuration required to implement the story are implemented.
  - Code follows the team’s agreed style guide and naming conventions.

- **Tests written**
  - Automated tests (unit and/or component tests) are added or updated to cover the new or changed behavior.
  - Edge cases and error paths relevant to the story are reasonably covered.

- **All tests passing**
  - The full test suite passes locally without failures.
  - Any new tests are stable and do not produce flaky or intermittent failures.

- **Committed to Git**
  - All changes related to the story are committed to the Git repository with a clear, descriptive commit message.
  - The working tree is clean (no uncommitted changes) and there are no temporary or debug files checked in.

- **No console errors**
  - When running the app in development mode and using the feature, the browser console shows no uncaught errors.
  - Any non-critical warnings have been reviewed and are either resolved or intentionally documented for later cleanup.
