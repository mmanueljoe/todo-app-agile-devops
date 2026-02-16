# Sprint 2 Retrospective

## Improvements Implemented from Sprint 1

Based on the Sprint 1 retrospective, we implemented the following improvements:

- **Test-Driven Development (TDD)**: For Sprint 2 features, we wrote comprehensive unit tests first, then implemented the features to make tests pass. This approach provided clearer requirements and caught edge cases earlier.

- **Better folder structure**: We maintained the established `src/component`, `src/hooks`, `src/models`, and `src/__test__/unit` structure from Sprint 1, avoiding refactoring overhead.

- **Expanded test coverage**: Added edge case testing for localStorage persistence, deletion confirmation dialogs, and progress calculation edge cases (empty lists, zero completion, etc.).

## Sprint 2 Features Delivered

Sprint 2 successfully delivered three user stories (11 story points):

### 1. Delete Tasks (3 story points)
- ✅ Delete button on each task item
- ✅ Confirmation dialog to prevent accidental deletions
- ✅ Immediate UI update when task is deleted
- ✅ Persistence: deleted tasks are removed from localStorage
- ✅ Works correctly with multiple tasks

### 2. Save Tasks to Browser (5 story points)
- ✅ Tasks persist to `localStorage` automatically on any change
- ✅ Tasks load from `localStorage` on app mount
- ✅ Handles storage errors gracefully (quota exceeded, disabled storage, etc.)
- ✅ Preserves all task properties: title, description, category, completion status, creation date
- ✅ Works seamlessly with all other features (add, complete, delete)

### 3. Show Progress (3 story points)
- ✅ Progress component displays total and completed task counts
- ✅ Visual progress bar with percentage calculation
- ✅ Real-time updates when tasks are added, completed, or deleted
- ✅ Handles edge cases: empty list (0%), all completed (100%), no tasks
- ✅ Accessible progress bar with ARIA attributes

## What Went Well

- **TDD approach improved code quality**: Writing tests first helped clarify requirements and resulted in more robust implementations, especially for localStorage persistence and edge cases.

- **Smooth integration**: All Sprint 2 features integrated seamlessly with Sprint 1 features. The `useTodos` hook was extended cleanly, and new components (`TodoProgress`, updated `TodoItem`) fit naturally into the existing architecture.

- **Comprehensive test coverage**: Added 13 new tests for Sprint 2 features (bringing total to 31 tests), covering all acceptance criteria and edge cases. All tests pass consistently.

- **CI/CD pipeline stability**: The GitHub Actions workflow ran successfully throughout Sprint 2, catching TypeScript errors and ensuring all tests pass before merging.

## Key Lessons Learned

### Agile Practices Demonstrated

- **Sprint Planning**: Both sprints followed clear planning with selected user stories, story point estimates, and rationale for story selection.

- **Product Backlog**: Maintained a prioritized backlog with 6 user stories, each with clear acceptance criteria, story points, and priority levels.

- **User Stories Format**: All stories followed the "As a [user], I want [action] so that [benefit]" format with detailed acceptance criteria.

- **Definition of Done**: All features met the Definition of Done criteria: code written, tests written, all tests passing, committed to Git, and no console errors.

- **Sprint Reviews**: Documented what was delivered, features status, testing coverage, and CI/CD status for both sprints.

- **Retrospectives**: Conducted retrospectives after each sprint to identify improvements and apply learnings to the next sprint.

### DevOps Practices Demonstrated

- **CI/CD Pipeline**: Implemented GitHub Actions workflow that automatically runs tests and builds on every push and pull request, ensuring code quality and preventing broken builds.

- **Automated Testing**: Comprehensive unit test suite (31 tests) runs automatically in CI/CD, providing fast feedback on code changes.

- **Version Control**: Used Git with clear commit messages and iterative commits showing incremental feature development.

- **Type Safety**: TypeScript configuration with strict mode ensures type safety and catches errors at compile time.

- **Code Quality**: ESLint and Prettier configured for consistent code style, with lint-staged and Husky for pre-commit hooks.

- **Monitoring**: CI/CD pipeline provides visibility into test results, build status, and code coverage.

## Final Reflection

This project successfully demonstrated Agile and DevOps practices in building a React Todo Dashboard. Through two sprints, we delivered 6 user stories (22 story points total) with comprehensive test coverage, CI/CD integration, and clean, maintainable code. The iterative approach allowed us to build a solid foundation in Sprint 1 and extend it seamlessly in Sprint 2. The combination of TDD, automated testing, and CI/CD ensured high code quality and rapid feedback loops. The project showcases how Agile methodologies (sprints, user stories, retrospectives) work together with DevOps practices (CI/CD, automated testing, version control) to deliver reliable, user-focused software.
