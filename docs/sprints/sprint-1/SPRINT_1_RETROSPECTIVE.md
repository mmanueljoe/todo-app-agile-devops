# Sprint 1 Retrospective

## What Went Well

- **Used Cursor AI to accelerate feature development**: Leveraging AI-assisted coding significantly sped up component creation, hook implementation, and test writing, allowing us to focus on architecture decisions and code quality.

- **Integrated testing early in the process**: Writing tests alongside feature development (rather than as an afterthought) helped catch issues early and ensured all features work as expected before moving forward.

## What Could Be Improved

- **Could have planned component structure in more detail**: Initial folder structure required refactoring from `features/` to `component/` and `component/ui/`, which could have been avoided with upfront architectural planning.

- **Could have written tests before implementation (TDD)**: While tests were written during development, following Test-Driven Development (TDD) would have provided clearer requirements and potentially caught edge cases earlier.

## Improvements for Sprint 2

- **Implement TDD (tests before code)**: Write tests first to define expected behavior, then implement features to make tests pass. This will improve code quality and reduce bugs.

- **Add more edge case testing**: Expand test coverage to include edge cases such as very long task titles, special characters, rapid task creation, and filter edge cases (empty lists, single category, etc.).

## Lessons Learned

Early integration of testing and CI/CD creates a solid foundation for maintaining code quality as the project grows. Planning the folder structure and component organization upfront saves time and reduces refactoring overhead later in the sprint.

