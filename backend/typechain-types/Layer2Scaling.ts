/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface Layer2ScalingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "balances"
      | "batches"
      | "depositFunds"
      | "finalizeBatch"
      | "nextBatchId"
      | "reportFraud"
      | "slashingPenalty"
      | "submitBatch"
      | "verifyBatch"
      | "withdrawFunds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BatchFinalized"
      | "BatchSubmitted"
      | "BatchVerified"
      | "FraudPenaltyApplied"
      | "FraudReported"
      | "FundsDeposited"
      | "FundsWithdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "batches",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFunds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeBatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextBatchId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reportFraud",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "slashingPenalty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitBatch",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyBatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "batches", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextBatchId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reportFraud",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slashingPenalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;
}

export namespace BatchFinalizedEvent {
  export type InputTuple = [batchId: BigNumberish];
  export type OutputTuple = [batchId: bigint];
  export interface OutputObject {
    batchId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BatchSubmittedEvent {
  export type InputTuple = [batchId: BigNumberish, transactionsRoot: BytesLike];
  export type OutputTuple = [batchId: bigint, transactionsRoot: string];
  export interface OutputObject {
    batchId: bigint;
    transactionsRoot: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BatchVerifiedEvent {
  export type InputTuple = [batchId: BigNumberish];
  export type OutputTuple = [batchId: bigint];
  export interface OutputObject {
    batchId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FraudPenaltyAppliedEvent {
  export type InputTuple = [user: AddressLike, penalty: BigNumberish];
  export type OutputTuple = [user: string, penalty: bigint];
  export interface OutputObject {
    user: string;
    penalty: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FraudReportedEvent {
  export type InputTuple = [batchId: BigNumberish, fraudProof: BytesLike];
  export type OutputTuple = [batchId: bigint, fraudProof: string];
  export interface OutputObject {
    batchId: bigint;
    fraudProof: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsDepositedEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsWithdrawnEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Layer2Scaling extends BaseContract {
  connect(runner?: ContractRunner | null): Layer2Scaling;
  waitForDeployment(): Promise<this>;

  interface: Layer2ScalingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  batches: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, boolean, boolean] & {
        batchId: bigint;
        transactionsRoot: string;
        timestamp: bigint;
        verified: boolean;
        finalized: boolean;
      }
    ],
    "view"
  >;

  depositFunds: TypedContractMethod<[], [void], "payable">;

  finalizeBatch: TypedContractMethod<
    [_batchId: BigNumberish],
    [void],
    "nonpayable"
  >;

  nextBatchId: TypedContractMethod<[], [bigint], "view">;

  reportFraud: TypedContractMethod<
    [_batchId: BigNumberish, _fraudProof: BytesLike],
    [void],
    "nonpayable"
  >;

  slashingPenalty: TypedContractMethod<[], [bigint], "view">;

  submitBatch: TypedContractMethod<
    [_transactionsRoot: BytesLike],
    [void],
    "nonpayable"
  >;

  verifyBatch: TypedContractMethod<
    [_batchId: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawFunds: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "batches"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, boolean, boolean] & {
        batchId: bigint;
        transactionsRoot: string;
        timestamp: bigint;
        verified: boolean;
        finalized: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "depositFunds"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "finalizeBatch"
  ): TypedContractMethod<[_batchId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "nextBatchId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reportFraud"
  ): TypedContractMethod<
    [_batchId: BigNumberish, _fraudProof: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "slashingPenalty"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "submitBatch"
  ): TypedContractMethod<[_transactionsRoot: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "verifyBatch"
  ): TypedContractMethod<[_batchId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawFunds"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "BatchFinalized"
  ): TypedContractEvent<
    BatchFinalizedEvent.InputTuple,
    BatchFinalizedEvent.OutputTuple,
    BatchFinalizedEvent.OutputObject
  >;
  getEvent(
    key: "BatchSubmitted"
  ): TypedContractEvent<
    BatchSubmittedEvent.InputTuple,
    BatchSubmittedEvent.OutputTuple,
    BatchSubmittedEvent.OutputObject
  >;
  getEvent(
    key: "BatchVerified"
  ): TypedContractEvent<
    BatchVerifiedEvent.InputTuple,
    BatchVerifiedEvent.OutputTuple,
    BatchVerifiedEvent.OutputObject
  >;
  getEvent(
    key: "FraudPenaltyApplied"
  ): TypedContractEvent<
    FraudPenaltyAppliedEvent.InputTuple,
    FraudPenaltyAppliedEvent.OutputTuple,
    FraudPenaltyAppliedEvent.OutputObject
  >;
  getEvent(
    key: "FraudReported"
  ): TypedContractEvent<
    FraudReportedEvent.InputTuple,
    FraudReportedEvent.OutputTuple,
    FraudReportedEvent.OutputObject
  >;
  getEvent(
    key: "FundsDeposited"
  ): TypedContractEvent<
    FundsDepositedEvent.InputTuple,
    FundsDepositedEvent.OutputTuple,
    FundsDepositedEvent.OutputObject
  >;
  getEvent(
    key: "FundsWithdrawn"
  ): TypedContractEvent<
    FundsWithdrawnEvent.InputTuple,
    FundsWithdrawnEvent.OutputTuple,
    FundsWithdrawnEvent.OutputObject
  >;

  filters: {
    "BatchFinalized(uint256)": TypedContractEvent<
      BatchFinalizedEvent.InputTuple,
      BatchFinalizedEvent.OutputTuple,
      BatchFinalizedEvent.OutputObject
    >;
    BatchFinalized: TypedContractEvent<
      BatchFinalizedEvent.InputTuple,
      BatchFinalizedEvent.OutputTuple,
      BatchFinalizedEvent.OutputObject
    >;

    "BatchSubmitted(uint256,bytes32)": TypedContractEvent<
      BatchSubmittedEvent.InputTuple,
      BatchSubmittedEvent.OutputTuple,
      BatchSubmittedEvent.OutputObject
    >;
    BatchSubmitted: TypedContractEvent<
      BatchSubmittedEvent.InputTuple,
      BatchSubmittedEvent.OutputTuple,
      BatchSubmittedEvent.OutputObject
    >;

    "BatchVerified(uint256)": TypedContractEvent<
      BatchVerifiedEvent.InputTuple,
      BatchVerifiedEvent.OutputTuple,
      BatchVerifiedEvent.OutputObject
    >;
    BatchVerified: TypedContractEvent<
      BatchVerifiedEvent.InputTuple,
      BatchVerifiedEvent.OutputTuple,
      BatchVerifiedEvent.OutputObject
    >;

    "FraudPenaltyApplied(address,uint256)": TypedContractEvent<
      FraudPenaltyAppliedEvent.InputTuple,
      FraudPenaltyAppliedEvent.OutputTuple,
      FraudPenaltyAppliedEvent.OutputObject
    >;
    FraudPenaltyApplied: TypedContractEvent<
      FraudPenaltyAppliedEvent.InputTuple,
      FraudPenaltyAppliedEvent.OutputTuple,
      FraudPenaltyAppliedEvent.OutputObject
    >;

    "FraudReported(uint256,bytes32)": TypedContractEvent<
      FraudReportedEvent.InputTuple,
      FraudReportedEvent.OutputTuple,
      FraudReportedEvent.OutputObject
    >;
    FraudReported: TypedContractEvent<
      FraudReportedEvent.InputTuple,
      FraudReportedEvent.OutputTuple,
      FraudReportedEvent.OutputObject
    >;

    "FundsDeposited(address,uint256)": TypedContractEvent<
      FundsDepositedEvent.InputTuple,
      FundsDepositedEvent.OutputTuple,
      FundsDepositedEvent.OutputObject
    >;
    FundsDeposited: TypedContractEvent<
      FundsDepositedEvent.InputTuple,
      FundsDepositedEvent.OutputTuple,
      FundsDepositedEvent.OutputObject
    >;

    "FundsWithdrawn(address,uint256)": TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;
    FundsWithdrawn: TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;
  };
}
