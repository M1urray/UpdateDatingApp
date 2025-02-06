import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  if (component.editForm?.dirty) {
    return confirm('Sure you want to continue? Any changes will be lost!');
  }
  return true;
};
