import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkoutRunnerComponent]
})
export class WorkoutRunnerModule { }

export class WorkoutPlan {
  constructor(
    public name: string,
    public title: string,
    public restBetweenExercise: number,
    public exercises: ExercisePlan[],
    public description?: string ){}

  totalWorkoutDuration(): number {
    if( !this.exercises ){
      return 0;
    }
    const total = this.exercises.map( (e) => e.duration).reduce(( previous, current) => previous + current );
    return ( this.restBetweenExercise ? this.restBetweenExercise : 0 ) * ( this.exercises.length -1 ) + total;
  }

}


export class ExercisePlan {
  constructor(
    public exercise: Exercise,
    public duration: number) {}
}

export class Exercise {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public nameSound?: string,
    public procedure?: string,
    public videos?: Array<string>) { }
}
