import { Component, OnInit } from '@angular/core';
import { WorkoutPlan, ExercisePlan, Exercise } from './workout-runner.module';

@Component({
  selector: 'abe-workout-runner',
  templateUrl: './workout-runner.component.html',
  styles: []
})
export class WorkoutRunnerComponent implements OnInit {

  workoutPlan: WorkoutPlan;
  restExercise: ExercisePlan;

  constructor() { }

  ngOnInit() {
    this.workoutPlan = this.buildWorkout();
    this.restExercise = new ExercisePlan( new Exercise('rest', 'Relax!', 'Relax a bit', 'rest.png'), this.workoutPlan.restBetweenExercise);
  }

  buildWorkout(){
    let workout = new WorkoutPlan('7MinWorkout', "7 Minute Workout", 10, []);
    workout.exercises.push( new ExercisePlan( new Exercise(
          'jumpingJacks',
          'Jumping Jacks',
      'A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.',
          'JumpingJacks.png',
      'jumpingjacks.wav',
      'Assume an erect position, with feet together and arms at your side. ...',
      ['dmYwZH_BNd0', 'BABOdJ-2Z6o', 'c4DAnQ6DtF8']),
      30));

    return workout;
  }
}
